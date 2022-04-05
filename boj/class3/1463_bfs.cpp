#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int bfs(int n) {
    queue<pair<int, int>> q;
    vector<bool> visited(n + 1, false);
    q.push({n, 0});
    visited[n] = true;
    pair<int, int> cur;
    int num, cnt;

    while (!q.empty()) {
        cur = q.front();
        num = cur.first;
        cnt = cur.second;

        q.pop();
        if (num == 1) break;
        if (num > 1 && !visited[num - 1]) {
            visited[num - 1] = true;
            q.push({num - 1, cnt + 1});
        }
        if (!(num % 2) && !visited[num / 2]) {
            visited[num / 2] = true;
            q.push({num / 2, cnt + 1});
        }
        if (!(num % 3) && !visited[num / 3]) {
            visited[num / 3] = true;
            q.push({num / 3, cnt + 1});
        }
    }
    return cnt;
}

int main() {
    int n;
    cin >> n;
    cout << bfs(n) << endl;
    return 0;
}