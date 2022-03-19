#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int main() {
    int t, n, m; cin >> t;
    while (t--) {
        cin >> n >> m;
        queue<int> q;
        vector<int> priority(n);
        for (int i = 0; i < n; i++) {
            q.push(i);
            cin >> priority[i];
        }

        int ans = 0, cur, cur_prior;
        while (1) {
            cur = q.front();
            cur_prior = priority[cur];
            ans++;
            q.pop();
            priority[cur] = 0;  // 검색에서 제외

            if (*max_element(priority.begin(), priority.end()) > cur_prior) {
                q.push(cur);
                priority[cur] = cur_prior;
                ans--;
            }
            else if (cur == m)
                break;
        }
        cout << ans << '\n';
    }

    return 0;
}