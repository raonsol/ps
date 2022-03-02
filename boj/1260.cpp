#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#define MAX 10001
using namespace std;

vector<vector<int>> graph(MAX);
vector<bool> visited(MAX, false);

void DFS(int vertex) {
    visited[vertex] = true;
    printf("%d ", vertex); // 방문 정점 출력
    for (int i = 0; i < graph[vertex].size(); i++) {
        int next = graph[vertex][i];
        if (!visited[next])
            DFS(next);
    }
}

void BFS(int start) {
    queue<int> q;
    q.push(start);
    visited[start] = true;

    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        printf("%d ", vertex); // 방문 정점 출력
        for (int i = 0; i < graph[vertex].size(); i++) {
            int next = graph[vertex][i];
            if (!visited[next]) {
                q.push(next);
                visited[next] = true;
            }
        }
    }
}

int main(void) {
    int v, e, start;
    scanf("%d %d %d", &v, &e, &start);

    visited.resize(v + 1);
    graph.resize(e + 1);

    for (int i = 0; i < e; i++) {
        int a, b; scanf("%d %d", &a, &b);
        graph[a].push_back(b);
        graph[b].push_back(a);
    }
    for (int i = 1; i <= v; i++)
        sort(graph[i].begin(), graph[i].end());

    DFS(start);
    printf("\n");
    fill(visited.begin(), visited.end(), false);
    BFS(start);
    printf("\n");

    return 0;
}
