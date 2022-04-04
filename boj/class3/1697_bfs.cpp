#include <iostream>
#include <queue>
using namespace std;
bool visited[100001];

int bfs(int n, int k) {
    queue<pair<int, int>> q;
    int cnt;
    pair<int, int> p;
    q.push({n, 0});  //시작점, 시간

    while (!q.empty()) {
        p = q.front();
        if (p.first == k) break;

        q.pop();
        int target[] = {p.first - 1, p.first + 1, p.first * 2};
        cnt = p.second + 1;
        for (int i = 0; i < 3; i++) {
            if (target[i] >= 0 && target[i] <= 100000 && !visited[target[i]]) {
                q.push({target[i], cnt});
                visited[target[i]] = true;
            }
        }
    }
    return p.second;
}

int main() {
    int n, k;
    cin >> n >> k;
    cout << bfs(n, k) << endl;
    return 0;
}