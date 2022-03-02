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
    int answer = 0, target = 0;
    int n = numbers.length();
    string s_target = "";
    vector<bool> v_is_prime(pow(10, n), true);
    vector<string> primes;
    sort(numbers.begin(), numbers.end());

    // detect_prime(v_is_prime);
    // bool can_build = true;
    // for (int i = 2; i < v_is_prime.size(); i++) {
    //     if (v_is_prime[i])
    //         primes.push_back(to_string(i));
    // }

    vector<int> candidate;
    string p = "", tmp = "";
    for (int r = 1; r <= numbers.length(); r++) {
        p += to_string(r);
    }

    for (int r = 1; r <= numbers.length(); r++) {
        do {
            for (int i = 0; i < r; i++) {
                //주어진 numbers에 대해 중복순열을 만들기 위해
                // p[i]는 index 번호로 취급
                tmp += p[i];
            }
            candidate.push_back(stoi(tmp));
            tmp = "";
            reverse(p.begin() + r, p.end());
        } while (next_permutation(p.begin(), p.end()));
    }

    return answer;
}

int main() {
    string n;
    int ans = solution("0112");
    cout << ans << endl;
    return 0;
}