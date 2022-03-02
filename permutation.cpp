#include <algorithm>
#include <vector>
#include <string>
#include <iostream>
#include <cmath>
using namespace std;

vector<int> solution(int n, int r_end) {
    vector<int> candidate;
    string p = "", tmp = "";

    //순열을 구할 표본 생성
    for (int r = 1; r <= n; r++) {
        p += to_string(r);
    }

    //nPr 변형, nP1~nPr까지 한번에 계산
    for (int r = 1; r <= r_end; r++) {
        do {
            // 앞의 r만큼만 구해서 저장
            for (int i = 0; i < r; i++) {
                tmp += p[i];
            }
            candidate.push_back(stoi(tmp));
            tmp = "";
            
            //여러번 같은 게 출력되는 것을 막기 위해
			//뒷부분에 reverse를 취해 다음 순회에서 skip되도록 함
            reverse(p.begin() + r, p.end());
        } while (next_permutation(p.begin(), p.end()));
    }

    return candidate;
}

int main() {
    string n;
    vector<int> ans = solution(4, 3);
    for (int i : ans)
        printf("%d ", i);
    return 0;
}