#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    //brown=2(w+h)-4<=5000
    //yellow=(w-2)*(h-2)<=2000000
    //=wh-2w-2h+4=wh+4-2(w+h)=wh-brown
    //w*h=yellow+brown
    //w>=h
    // w, h >= 3
    int t = yellow + brown;
    int h, w;

    //약수 구하기
    for (h = 3; h * h <= t; h++) {
        // 약수가 발견되면 조건 검사
        if (!(t % h)) {
            w = t / h;
            if (2 * (w + h) - 4 == brown && (w - 2) * (h - 2) == yellow) {
                answer.push_back(w);
                answer.push_back(h);
                return answer;
            }
        }
    }
    return answer;
}

int main() {
    string n;
    vector<int> ans = solution(24, 24);
    for (int i : ans) cout << i;
    cout << endl;
    return 0;
}