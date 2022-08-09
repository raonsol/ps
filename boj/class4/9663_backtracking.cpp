#include <iostream>
#include <vector>

using namespace std;
#define FAST_IO                \
  ios::sync_with_stdio(false); \
  cin.tie(NULL);               \
  cout.tie(NULL);

int ans = 0;
vector<pair<int, int>> queens;
void dfs(int depth, int n) {
  for (int x = 0; x < n; x++) {
    bool isAval = true;
    for (auto q : queens) {
      if (q.second == x || abs(q.second - x) == depth - q.first) {
        isAval = false;
        break;
      }
    }
    if (isAval) {
      if (depth == n - 1)
        ans++;
      else {
        queens.emplace_back(depth, x);
        dfs(depth + 1, n);
        queens.pop_back();
      }
    }
  }
}

int main(int argc, char** argv) {
#ifndef ONLINE_JUDGE
  freopen("input.txt", "r", stdin);
#endif
  FAST_IO;
  int n;
  cin >> n;
  vector<pair<int, int>> queens;
  dfs(0, n);
  cout << ans << endl;

  return 0;
}