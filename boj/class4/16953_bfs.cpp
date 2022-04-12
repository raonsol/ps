#include <algorithm>
#include <iostream>
#include <queue>
using namespace std;

int bfs(int a, int b) {
    queue<pair<long long, long long>> q;
    q.push({a, 1});
    pair<long long, long long> cur;
    while (!q.empty()) {
        cur = q.front();
        q.pop();
        if (cur.first == b) break;
        if (cur.first * 2 <= b) q.push({cur.first * 2, cur.second + 1});
        if (cur.first * 10 + 1 <= b)
            q.push({cur.first * 10 + 1, cur.second + 1});
    }

    int ans;
    if (cur.first == b)
        ans = cur.second;
    else
        ans = -1;
    return ans;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << bfs(a, b) << endl;
    return 0;
}