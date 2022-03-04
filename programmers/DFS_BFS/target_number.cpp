#include <iostream>
#include <vector>
using namespace std;

vector<int> num;
int cnt = 0, t = 0;

void dfs(int d, int n) {
    if (d == num.size()) {
        if (n == t) cnt++;
        return;
    }
    dfs(d + 1, n + num[d]);
    dfs(d + 1, n - num[d]);
}

int solution(vector<int> numbers, int target) {
    num = numbers;
    t = target;
    dfs(0, 0);
    int answer = cnt;
    return answer;
}

int main() {
    cout << solution({ 1, 50, 1 }, 50) << endl;
    return 0;
}