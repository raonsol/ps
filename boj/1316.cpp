#include <iostream>
#include <set>
#include <string>
using namespace std;
#define FAST_IO                \
  ios::sync_with_stdio(false); \
  cin.tie(NULL);               \
  cout.tie(NULL);

int main() {
  int n, cnt = 0;
  bool is_group;
  cin >> n;
  while (n--) {
    string s;
    cin >> s;

    is_group = true;
    set<char> c_set;
    char before_c = '0';

    for (char c : s) {
      if (c != before_c) {
        before_c = c;
        if (c_set.count(c) != 0) {
          is_group = false;
          break;
        }
        c_set.insert(c);
      }
    }
    if (is_group) cnt++;
  }
  cout << cnt << endl;
  return 0;
}