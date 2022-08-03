#include <map>
#include <queue>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<string> operations) {
  vector<int> answer;
  priority_queue<int> max_q;
  priority_queue<int, vector<int>, greater<int>> min_q;
  map<int, int> m;

  for (string str : operations) {
    char c = str[0];
    int n = stoi(str.substr(2));
    if (c == 'I') {
      max_q.push(n);
      min_q.push(n);
      if (m.find(n) == m.end())
        m.emplace(n, 1);
      else
        m[n]++;
    } else {
      int tmp;
      if (!min_q.empty() && !max_q.empty()) {
        if (n == -1) {
          while (m[min_q.top()] == 0 && !min_q.empty()) min_q.pop();
          if (!min_q.empty()) {
            m[min_q.top()]--;
            min_q.pop();
          }
        } else {
          while (m[max_q.top()] == 0 && !max_q.empty()) max_q.pop();
          if (!max_q.empty()) {
            m[max_q.top()]--;
            max_q.pop();
          }
        }
      }
    }
  }

  int min, max;
  bool isEmpty = false;
  if (min_q.empty() || max_q.empty()) {
    isEmpty = true;
  } else {
    while (m[min_q.top()] == 0 && !min_q.empty()) min_q.pop();
    if (min_q.empty())  // 속 빈 쭉정이일 경우
      isEmpty = true;
    else
      min = min_q.top();
    if (!isEmpty) {
      while (m[max_q.top()] == 0 && !max_q.empty()) max_q.pop();
      if (max_q.empty())  // 쭉정이
        isEmpty = true;
      else
        max = max_q.top();
    }
  }
  if (isEmpty) {
    answer.push_back(0);
    answer.push_back(0);
  }

  else {
    answer.push_back(max);
    answer.push_back(min);
  }

  return answer;
}