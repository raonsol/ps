#include <iostream>
#include <string>
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
  int m;
  string arg;
  cin >> m;
  unsigned int s = 0;
  while (m--) {
    cin >> arg;
    if (arg == "all") {
      s = (1 << 21) - 1;
    } else if (arg == "empty") {
      s = 0;
    } else {
      int n;
      cin >> n;
      if (arg == "add")
        s = s | (1 << n);
      else if (arg == "remove")
        s = s & ~(1 << n);
      else if (arg == "check")
        cout << ((s & (1 << n)) ? 1 : 0) << '\n';
      else if (arg == "toggle")
        s = s ^ (1 << n);
    }
  }
  return 0;
}