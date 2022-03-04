#include <algorithm>
#include <vector>
#include <string>
#include <iostream>
#include <cmath>
using namespace std;

int solution(string numbers) {
    int answer = 0, target = 0;
    int n = numbers.length();
    string s_target = "";
    sort(numbers.begin(), numbers.end());

    vector<int> candidate;
    string p = "", tmp = "";
    for (int r = 0; r < numbers.length(); r++) {
        p += to_string(r);
    }
    for (int r = 1; r <= numbers.length(); r++) {
        do {
            for (int i = 0; i < r; i++) {
                // 주어진 numbers에 대해 중복순열을 만들기 위해
                // p[i]는 index 번호로 취급
                tmp += numbers[p[i] - '0'];
            }
            candidate.push_back(stoi(tmp));
            tmp = "";
            reverse(p.begin() + r, p.end());
        } while (next_permutation(p.begin(), p.end()));
    }
    sort(candidate.begin(), candidate.end());
    candidate.erase(unique(candidate.begin(), candidate.end()), candidate.end());
    
    int cnt = 0;
    for (int i : candidate) {
        if (i == 0 || i == 1) cnt++;
        else {
            for (int j = 2; j * j <= i; j++) {
                if (!(i % j)) {
                    cnt++;
                    break;
                }
            }
        }
    }
    answer = candidate.size() - cnt;

    return answer;
}

int main() {
    string n;
    int ans = solution("0112893741");
    cout << ans << endl;
    return 0;
}