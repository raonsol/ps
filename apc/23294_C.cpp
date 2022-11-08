#include <algorithm>
#include <deque>
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

  int n, q, cache_max, cache_size = 0;
  cin >> n >> q >> cache_max;
  vector<int> cache(n + 1, 0);
  for (int i = 1; i <= n; i++) cin >> cache[i];
  char oper;
  int cur = 0, new_page;
  deque<int> back, front;
  for (int i = 0; i < q; i++) {
    cin >> oper;
    if (oper == 'A') {
      cin >> new_page;
      int tmp;
      while (!front.empty()) {
        tmp = front.back();
        cache_size -= cache[tmp];
        front.pop_back();
      }
      if (cur) {
        back.push_front(cur);
        cache_size += cache[cur];
      }
      cur = new_page;

      while (cache_size + cache[cur] > cache_max && !back.empty()) {
        int size = cache[back.back()];
        back.pop_back();
        cache_size -= size;
      }
    } else if (oper == 'F' && !front.empty()) {
      back.push_front(cur);
      cache_size += cache[cur];
      cur = front.front();
      front.pop_front();
      cache_size -= cache[cur];
    } else if (oper == 'B' && !back.empty()) {
      front.push_front(cur);
      cache_size += cache[cur];
      cur = back.front();
      back.pop_front();
      cache_size -= cache[cur];
    } else if (oper == 'C' && back.size() > 1) {
      int tmp = back.front();
      auto iter = back.begin() + 1;
      do {
        if (*iter != tmp) {
          tmp = *iter;
          iter++;
        } else {
          cache_size -= (cache[*iter]);
          iter = back.erase(iter);
        }
      } while (iter != back.end() && !back.empty());
    }
  }

  cout << cur << endl;
  if (back.empty())
    cout << -1;
  else
    for (int i : back) {
      cout << i << " ";
    }

  cout << endl;
  if (front.empty())
    cout << -1;
  else
    for (int i : front) {
      cout << i << " ";
    }

  cout << endl;
  return 0;
}

// 앞뒤 리스트는 캐시용량 초과시 오래된 것부터 삭제
// 뒤로가기: 현재 페이지 앞에 저장하고 뒤로 이동
// 앞에가기: 현재 페이지 뒤에 저장하고 앞으로 이동
// 접속: 앞으로 가기 리스트 삭제
// 압축: 뒤 리스트에서 '연속된' 원소 삭제
// front=오래됨, back=최근