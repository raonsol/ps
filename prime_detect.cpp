#include <algorithm>
#include <vector>
#include <string>
#include <iostream>
#include <cmath>
using namespace std;

void detect_prime(vector<bool>& n) {
    n[1] = false;
    for (int i = 2; i < n.size(); i++) {     //i==검사할 수
        if (!n[i]) continue;                  //이미 검사했으면 skip
        for (int j = i - 1; j > 1; j--) {
            if (!(i % j)) {                  //소수일 경우 배수 표시
                for (int k = 2; j * k < n.size(); k++) {
                    n[j * k] = false;
                }
                break;
            }
        }
    }
}

int solution(string numbers) {
    int answer = 0;
    vector<bool> v_prime(pow(10, numbers.length()), true);
    detect_prime(v_prime);


    //1. 만들 수 있는 숫자의 조합을 모두 구해 소수 검사
    //2. 2부터 입력 개수를 자리수로 하는 소수들을 미리 구해놓고 만들 수 있는지 검사


    return answer;
}

int main() {
    string n;
    solution("132");
    return 0;
}