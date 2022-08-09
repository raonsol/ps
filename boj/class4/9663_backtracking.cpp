#include <iostream>
#include <vector>

using namespace std;
#define FAST_IO                \
  ios::sync_with_stdio(false); \
  cin.tie(NULL);               \
  cout.tie(NULL);

int ans = 0;
vector<int> queenX;

bool isAval(int y, int x) {
  for (int i = 0; i < y; i++) {
    if (queenX[i] == x || abs(queenX[i] - x) == y - i) {
      return false;
    }
  }
  return true;
}

void dfs(int depth, int n) {
  for (int x = 0; x < n; x++) {
    if (isAval(depth, x)) {
      if (depth == n - 1)
        ans++;
      else {
        queenX[depth] = x;
        dfs(depth + 1, n);
      }
    }
  }
};

int main(int argc, char** argv) {
#ifndef ONLINE_JUDGE
  freopen("input.txt", "r", stdin);
#endif
  FAST_IO;
  int n;
  cin >> n;
  queenX.resize(n);
  dfs(0, n);
  cout << ans << endl;

  return 0;
}