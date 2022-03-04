#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int solution(vector<int> citations) {
    sort(citations.begin(), citations.end());
    if (citations.front() >= citations.size())
        return citations.size();
    int n_exceed = 0;
    for (int i = 0; i < citations.back(); i++) {
        for (int j = 0; j < citations.size(); j++) {
            if (citations[j] >= i) {
                n_exceed = citations.size() - j;
                break;
            }
        }
        if (n_exceed <= i)
            return n_exceed;
    }
}

int main() {
    // {0, 0, 0, 2}==1, {0, 1, 3, 4}==2, {10, 11, 12, 13}==4
    vector<int> n = { 3, 0, 6, 1, 5 };
    cout << solution(n) << endl;
    return 0;
}