#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

vector<int> graph[101];
bool visited[101];

int dfs(int cur, int n) {
    int cnt = 1;
    visited[cur] = true;
    for (int i : graph[cur])
        if (!visited[i]) cnt += dfs(i, n);

    return cnt;
}

int main() {
    int n, t;
    cin >> n >> t;
    int in, out;
    for (int i = 0; i < t; i++) {
        cin >> in >> out;
        graph[in].push_back(out);
        graph[out].push_back(in);
    }
    cout << dfs(1, n) - 1 << endl;
    return 0;
}