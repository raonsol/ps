#include <cstring>
#include <iostream>
#include <vector>
using namespace std;

bool field[51][51], visited[51][51];
int h, w, k;

bool dfs(int x, int y) {
    if (field[x][y] && !visited[x][y]) {
        visited[x][y] = true;
        if (x - 1 >= 0) dfs(x - 1, y);
        if (y - 1 >= 0) dfs(x, y - 1);
        if (x + 1 <= w) dfs(x + 1, y);
        if (y + 1 <= h) dfs(x, y + 1);
        return true;
    } else
        return false;
}

int main() {
    // ios::sync_with_stdio(false);
    // cin.tie(NULL);
    // cout.tie(NULL);
    int t;
    cin >> t;

    while (t--) {
        cin >> w >> h >> k;
        vector<pair<int, int>> loc;

        for (int i = 0; i < h; i++) {
            memset(field[i], false, sizeof(bool) * w);
            memset(visited[i], false, sizeof(bool) * w);
        }

        int x, y;
        while (k--) {
            cin >> x >> y;
            loc.push_back(make_pair(x, y));
            field[x][y] = true;
        }
        int ans = 0;
        for (auto i : loc) {
            if (dfs(i.first, i.second)) ans++;
        }

        cout << ans << '\n';
    }
    return 0;
}