#include <iostream>
#include <vector>
using namespace std;

int ans = 10000000;

void dfs(int w, int h, int cnt, vector<vector<bool>>& maze,
         vector<vector<bool>> visited) {
    visited[h][w] = true;
    if (w + 1 == visited[0].size() && h + 1 == visited.size()) {
        if (ans > cnt) ans = cnt;
        return;
    }

    if (w + 1 < visited[0].size() && maze[h][w + 1] && !visited[h][w + 1])
        dfs(w + 1, h, cnt + 1, maze, visited);
    if (h - 1 >= 0 && maze[h - 1][w] && !visited[h - 1][w])
        dfs(w, h - 1, cnt + 1, maze, visited);
    if (w - 1 >= 0 && maze[h][w - 1] && !visited[h][w - 1])
        dfs(w - 1, h, cnt + 1, maze, visited);
    if (h + 1 < visited.size() && maze[h + 1][w] && !visited[h + 1][w])
        dfs(w, h + 1, cnt + 1, maze, visited);

    return;
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

    vector<vector<bool>> visited(n, vector<bool>(m, false));
    dfs(0, 0, 1, maze, visited);
    cout << ans << endl;

    return 0;
}