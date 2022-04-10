#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> v(n);
    vector<vector<int>> ans;

    for (int i = 0; i < n; i++) v[i] = i + 1;
    do {
        vector<int> tmp;
        for (int i = 0; i < m; i++) tmp.push_back(v[i]);
        ans.push_back(tmp);
    } while (next_permutation(v.begin(), v.end()));
    ans.erase(unique(ans.begin(), ans.end()), ans.end());

    for (vector<int> i : ans) {
        for (int j : i) cout << j << " ";
        cout << '\n';
    }
    return 0;
}