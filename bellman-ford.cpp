#include <iostream>
#include <vector>
using namespace std;

struct EDGE {	//간선의 정보를 저장할 구조체
    int from, to, w;
};
const int inf = 1e8;	//무한대 값
vector<EDGE> edge;  	//간선의 정보를 저장할 배열
bool nCycle = 0;	    //음수 사이클이 있는지 확인할 변수
vector<int> BellmanFord(int v, int s) {	    //v: 정점의 개수, s: 시작점
    vector<int> dist(v + 1);	            //거리를 저장할 배열 선언
    fill(dist.begin(), dist.end(), inf);	//거리를 모두 큰 값으로 저장
    dist[s] = 0;	//시작점까지의 거리는 0으로 초기화
    for (int i = 1; i <= v; ++i) {          	//v번 반복
        for (int j = 0; j < edge.size(); ++j) {	//모든 간선을 확인
            int from = edge[j].from, to = edge[j].to, w = edge[j].w;
            if (dist[from] != inf && dist[to] > dist[from] + w) {
                //출발점까지의 거리가 무한대가 아니고, 도착점까지의 거리가 
                //출발점을 거쳐서 가는 경로의 길이보다 길다면 값을 갱신
                dist[to] = dist[from] + w;
                if (i == v) {	//만약 반복 과정이 v번째 과정이라면 음수 사이클이 있다는 것을 확인
                    nCycle = 1;
                    break;
                }
            }
        }
    }
    return dist;
}