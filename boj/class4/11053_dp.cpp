#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    vector<int> dp(n, 1);
    for (int cur = 0; cur < n; cur++) {
        for (int j = 0; j < cur; j++) {
            if (v[cur] > v[j]) {
                dp[cur] = max(dp[cur], dp[j] + 1);
            }
        }
    }
    cout << *max_element(dp.begin(), dp.end()) << endl;
    return 0;
}
