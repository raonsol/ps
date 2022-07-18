#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int ans = 10000000;
int dist[100][100];
int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};

void bfs(int w, int h, vector<vector<bool>>& maze) {
    queue<pair<int, int>> q;
    pair<int, int> p;
    q.push({0, 0});  //시작점

    int x, y;
    while (!q.empty()) {
        p = q.front();
        q.pop();
        x = p.second;
        y = p.first;
        for (int i = 0; i < 4; i++) {
            int xx = x + dx[i];
            int yy = y + dy[i];
            if (xx >= 0 && yy >= 0 && xx < w && yy < h
                && maze[yy][xx] &&!dist[yy][xx]) {
                q.push({yy, xx});
                dist[yy][xx] = dist[y][x] + 1;
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<bool>> maze(n);
    string tmp;
    for (int i = 0; i < n; i++) {
        cin >> tmp;
        for (char c : tmp) {
            if (c == '0')
                maze[i].push_back(false);
            else
                maze[i].push_back(true);
        }
    }
    bfs(m, n, maze);
    cout << dist[n - 1][m - 1]+1 << endl;
    return 0;
}