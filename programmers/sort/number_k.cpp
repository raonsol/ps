#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    for (vector<int> command : commands) {
        vector<int> slice(command[1] - command[0] + 1);
        slice.assign(array.begin() + command[0] - 1, array.begin() + command[1]);
        sort(slice.begin(), slice.end());
        answer.push_back(slice[command[2] - 1]);
    }

    return answer;
}

int main() {
    vector<int> a = { 1, 5, 2, 6, 3, 7, 4 };
    vector<vector<int>> c = { {2, 5, 3}, {4, 4, 1}, {1, 7, 3} };
    for (int i : solution(a, c))
        cout << i;
    cout << endl;
    return 0;
}