#include <algorithm>
#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool comp(string a, string b) {
    return stoi(a + b) > stoi(b + a);
}

string solution(vector<int> numbers) {
    string answer = "";
    vector<string> n(numbers.size());
    transform(numbers.begin(), numbers.end(), n.begin(), [](int i) { return to_string(i); });
    sort(n.begin(), n.end(), comp);
    for (string number : n) answer += number;
    int max = stoi(*max_element(n.begin(), n.end()));
    if (!max) return "0";
    return answer;
}

int main() {
    vector<int> n = { 0, 0 };
    cout << solution(n) << endl;
    return 0;
}