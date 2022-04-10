#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    cin.tie(NULL);
    ios::sync_with_stdio(false);
    int n, m;
    cin >> n >> m;
    vector<bool> v(n, false);
    vector<vector<int>> ans;
    for (int i = 0; i < m; i++) v[i] = true;
    do {
        vector<int> tmp;
        for (int i = 0; i < n; i++)
            if (v[i]) tmp.push_back(i + 1);
        ans.push_back(tmp);
    } while (prev_permutation(v.begin(), v.end()));
    for (vector<int> i : ans) {
        for (int j : i) cout << j << " ";
        cout << '\n';
    }
    return 0;
}