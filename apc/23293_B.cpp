#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;
#define FAST_IO                \
  ios::sync_with_stdio(false); \
  cin.tie(NULL);               \
  cout.tie(NULL);
int main() {
#ifndef ONLINE_JUDGE
  freopen("input.txt", "r", stdin);
#endif
  FAST_IO;
  int t, n;
  cin >> t >> n;
  vector<int> log, ban;
  vector<int> loc(n + 1, 1);
  vector<vector<int>> item(n + 1, vector<int>(54, 0));

  for (int i = 1; i <= t; i++) {
    int ln, player;
    char act;
    cin >> ln >> player >> act;
    if (act == 'C') {
      int item_a, item_b;
      cin >> item_a >> item_b;
      if (!(item[player][item_a] && item[player][item_b])) log.push_back(i);
      item[player][item_a] =
          (!item[player][item_a] ? 0 : item[player][item_a] - 1);
      item[player][item_b] =
          (!item[player][item_b] ? 0 : item[player][item_b] - 1);
    } else {
      int arg;
      cin >> arg;
      if (act == 'M') {
        loc[player] = arg;
      } else if (act == 'F') {
        if (loc[player] != arg) log.push_back(i);
        item[player][arg]++;
      } else if (act == 'A') {
        if (loc[player] != loc[arg]) {
          log.push_back(i);
          ban.push_back(player);
        }
      }
    }
  }
  cout << log.size() << '\n';
  if (log.size()) {
    for (auto i : log) cout << i << ' ';
    cout << '\n';
  }
  sort(ban.begin(), ban.end());
  ban.erase(unique(ban.begin(), ban.end()), ban.end());
  cout << ban.size() << '\n';
  if (ban.size()) {
    for (auto i : ban) cout << i << ' ';
    cout << '\n';
  }

  return 0;
}

// 이동은 M(Move), 획득은 F(Farming), 조합은 C(Crafting), 공격은 A(Attack)
// 플레이어가 현재 위치한 지역에서 얻을 수 없는 소재 아이템을 획득한 경우
// 플레이어가 가지고 있지 않은 소재 아이템을 사용해 조합하는 경우
// 플레이어가 다른 지역에 있는 상대 플레이어를 공격하는 경우

// 현재 플레이어 위치 저장 map
// 플레이어 소유 아이템 저장 map, <int, vector<bool>(54)>
// 부정습득은 로그 남겨야하지만 습득한 사실은 인정됨