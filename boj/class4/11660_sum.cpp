#include <iostream>
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
  int n, m;
  cin >> n >> m;
  vector<vector<int>> table(n + 1, vector<int>(n + 1, 0));
  vector<vector<int>> sumTable(n + 1, vector<int>(n + 1, 0));
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      cin >> table[i][j];
      sumTable[i][j] = sumTable[i - 1][j] + sumTable[i][j - 1] -
                       sumTable[i - 1][j - 1] + table[i][j];
    }
  }
  int y1, x1, y2, x2, ans;
  for (int t = 0; t < m; t++) {
    cin >> y1 >> x1 >> y2 >> x2;
    ans = sumTable[y2][x2] - sumTable[y2][x1 - 1] - sumTable[y1 - 1][x2] +
          sumTable[y1 - 1][x1 - 1];
    cout << ans << '\n';
  }
  return 0;
}