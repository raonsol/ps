#include <algorithm>
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
  int a, b, c;
  cin >> a >> b >> c;
  cout << a << b << c;
  return 0;
}