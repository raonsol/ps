#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
#define FAST_IO ios::sync_with_stdio(false); cin.tie(0); 

int main() {
    FAST_IO;
    int n;
    cin >> n;
    vector<vector<int>> v;
    for (int i = 0; i < n; i++) {
        vector<int> tmp;
        int tmp_i;
        for (int j = 0; j <= i; j++) {
            cin >> tmp_i;
            tmp.push_back(tmp_i);
        }
        v.push_back(tmp);
    }

    vector<vector<int>> dp;
    dp.push_back({v[0][0]});
    for (int i = 1; i < n; i++) {
        vector<int> row;
        for (int j = 0; j <= i; j++) {
            int sum;
            if (j == 0)
                sum = dp[i - 1][0];
            else if (j == i)
                sum = dp[i - 1][i - 1];
            else
                sum = max(dp[i - 1][j - 1], dp[i - 1][j]);
            row.push_back(sum + v[i][j]);
        }
        dp.push_back(row);
    }
    cout << *max_element(dp[n - 1].begin(), dp[n - 1].end()) << endl;
    return 0;
}