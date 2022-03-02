#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> answer;
    //1번: 1~5까지 순차
    //2번: 2, n (2, 1, 2, 3, ~), index가 짝수일 때 2, 아닐때 1-1, 3-3, 5-4, 7-5, 9-1, 11-3...
    //3번: 3*2, 1*2, 2*2, 4*2, 5*2
    vector<int> cnt(3, 0);
    vector <vector<int>> cnt2(3);
    int ar2[4] = { 1, 3, 4, 5 };
    int ar3[5] = { 3, 1, 2, 4, 5 };
    int p1, p2, p3;
    for (int i = 0; i < answers.size(); i++) {
        p1 = (i+1) % 5 ? (i+1) % 5 : 5;
        p2 = (i % 2) ? ar2[(i / 2) % 4] : 2;
        p3 = ar3[(i / 2) % 5];
        if (p1 == answers[i]) cnt[0]++;
        if (p2 == answers[i]) cnt[1]++;
        if (p3 == answers[i]) cnt[2]++;
        cnt2[0].push_back(p1);
        cnt2[1].push_back(p2);
        cnt2[2].push_back(p3);
    }
    int max = *max_element(cnt.begin(), cnt.end());
    for (int i = 0; i < 3; i++) {
        if (cnt[i] == max) answer.push_back(i + 1);
    }
    sort(answer.begin(), answer.end());
    return answer;
}

int main() {
    vector<int> answers = { 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2 };
    vector<int> answer = solution(answers);
    for (int i = 0; i < answer.size(); i++) {
        printf("%d ", answer[i]);
    }
    return 0;
}