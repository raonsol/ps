#include <algorithm>
#include <cmath>
#include <iostream>
#include <string>
#include <vector>

using namespace std;
#define FAST_IO                \
  ios::sync_with_stdio(false); \
  cin.tie(NULL);               \
  cout.tie(NULL);

typedef struct _Date {
  string year, month, day;
} Date;

Date split_date(string str) {
  Date out;
  out.year = str.substr(0, 4);
  out.month = str.substr(4, 2);
  out.day = str.substr(6, 2);
  return out;
}

int calc_score(Date base, Date date) {
  int score[3] = {0, 0, 0};
  for (int i = 0; i < 4; i++) {
    score[0] += pow(base.year[i] - date.year[i], 2);
  }
  int score_b = 0, score_c = 0;
  for (int i = 0; i < 2; i++) {
    score[1] += pow(base.month[i] - date.month[i], 2);
    score[2] += pow(base.day[i] - date.day[i], 2);
  }
  return score[0] * score[1] * score[2];
}

bool compare(Date a, Date b) {
  if (stoi(a.year) != stoi(b.year))
    return stoi(a.year) - stoi(b.year);
  else if (stoi(a.month) != stoi(b.month))
    return stoi(a.month) - stoi(b.month);
  else
    return stoi(a.day) - stoi(b.day);
}

int main() {
#ifndef ONLINE_JUDGE
  freopen("input.txt", "r", stdin);
#endif
  FAST_IO;
  string birth_str;
  int n;
  cin >> birth_str >> n;
  Date start = split_date(birth_str);

  vector<Date> date(n);
  vector<int> score(n);
  int score_tmp, max_score = 0, max_idx;
  for (int i = 0; i < n; i++) {
    cin >> birth_str;
    date[i] = split_date(birth_str);
    score[i] = calc_score(start, date[i]);
    if (score[i] > max_score) {
      max_score = score[i];
      max_idx = i;
    }
  }

  vector<Date> ans;
  for (int i = 0; i < n; i++) {
    if (score[i] == max_score) ans.push_back(date[i]);
  }
  sort(ans.begin(), ans.end(), compare);
  string ans_str = ans[0].year + ans[0].month + ans[0].day;
  cout << ans_str << endl;

  return 0;
}