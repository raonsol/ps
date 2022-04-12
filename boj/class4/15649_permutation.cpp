#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> v(n);
    for (int i = 0; i < n; i++) v[i] = i + 1;

    vector<int> tmp, ans;
    do {
        ans = vector<int>(v.begin(), v.begin() + m);
        if (vector<int>(v.begin(), v.begin() + m) != tmp) {
            for (int j : ans) cout << j << " ";
            cout << '\n';
            tmp = ans;
        }
    } while (next_permutation(v.begin(), v.end()));

    return 0;
}