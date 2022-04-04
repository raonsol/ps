#include <climits>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> dp(n + 1, 0);
    dp[1] = 1;
    int m;
    for (int i = 2; i <= n; i++) {
        m = INT_MAX;
        for (int j = 1; j * j <= i; j++) {
            m = min(m, dp[i - j * j]);
        }
        dp[i] = m + 1;
    }
    cout << dp[n] << endl;
    return 0;
}