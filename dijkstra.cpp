#include <iostream>
#include <vector>
#include <queue>
using namespace std;

#define VMAX 101010	//정점의 최대 개수

const int inf = 1e9;
struct EDGE {	//간선의 정보를 저장하기 위한 구조체
    int to, w;
};
vector<EDGE> adj[VMAX];	//인접 리스트를 이용하여 그래프의 정보를 저장
//우선순위 큐를 이용하기 위해 연산자 '<'를 오버로딩(오름차순 정렬)
bool operator < (EDGE e1, EDGE e2) {
    return e1.w > e2.w;
}
vector<int> dijkstra(int s) {	//s = 시작점
    vector<int> ans(VMAX);	    //시작점으로부터 최단 거리를 저장 할 배열

    //시작점으로부터의 거리를 매우 큰 수로 초기화
    for (int i = 0; i < ans.size(); ++i)
        ans[i] = inf;

    //우선순위 큐에 시작점과 그 거리를 저장
    priority_queue<EDGE> q;
    q.push({ s, 0 });
    ans[s] = 0;

    while (q.size()) {
        //현재 위치에서 가장 가까운 곳에 있는 정점을 현재 정점으로 선택
        int cur = q.top().to, d = q.top().w;
        q.pop();

        //현재 정점에서 방문할 수 있는 모든 정점 확인
        for (int i = 0; i < adj[cur].size(); ++i) {
            int nextV = adj[cur][i].to, nextD = adj[cur][i].w + d;
            if (ans[nextV] > nextD) {	//만약 다음 정점까지의 거리가, 기록해둔 거리보다 짧은 경우
                ans[nextV] = nextD;	    //거리 갱신
                q.push({ nextV, nextD });
            }
        }
    }
    return ans;
}