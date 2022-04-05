#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> stairs(n + 1);
    for (int i = 1; i <= n; i++) cin >> stairs[i];
    vector<int> dp(n + 1, 0);
    dp[0] = 0;
    dp[1] = stairs[1];
    dp[2] = dp[1] + stairs[2];

    // max(전 계단을 밟은 경우, 전전 계단을 밟은 경우)
    // 전 계단을 밟은 경우 == 전전 계단은 밟았지 못함, 전전전 계단만 밟았음
    for (int i = 3; i <= n; i++) {
        dp[i] = max(dp[i - 3] + stairs[i - 1], dp[i - 2]) + stairs[i];
    }
    cout << dp[n] << endl;
    return 0;
}