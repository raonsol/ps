#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    unordered_map<string, int> m;
    for (auto i : completion)
        m[i]++;
    for (auto i : participant) {
        m[i]--;
        if (m[i] < 0) return i;
    }
}

int main() {
    cout << solution({ "leo", "kiki", "eden" }, { "eden", "kiki" }) << endl;
    return 0;
}