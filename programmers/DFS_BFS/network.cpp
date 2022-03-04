#include <iostream>
#include <vector>
using namespace std;
vector<vector<int>> node;
void check_net(vector<bool>& visited, int n) {
    for (int i = 0; i < node.size();i++) {
        if (node[n][i] && !visited[i]) {
            visited[i] = true;
            if(i!=n) check_net(visited, i);
        }
    }
    return;
}

int solution(int n, vector<vector<int>> computers) {
    // 한 node에 대해 dfs를 돌리며 방문여부를 체크하고
    // 방문가능한 node가 남아있으면 cnt++하고 그 node에 대해 dfs 수행
    // 방문가능한 node가 남아있을 때까지 수행
    node = computers;
    int answer = 0;
    vector<bool> visited(computers.size(), false);
    for (int i = 0; i < computers.size(); i++) {
        if (!visited[i]) {
            answer++;
            check_net(visited, i);
        }
    }
    return answer;
}

int main() {
    vector<vector<int>> c = { {1, 1, 0}, {1, 1, 0}, {0, 0, 1} };
    // vector<vector<int>> c = { {1, 1, 0}, {1, 1, 1}, {0, 1, 1} };
    cout << solution(3, c) << endl;
    return 0;
}