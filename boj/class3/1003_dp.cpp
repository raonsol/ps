#include <iostream>
#include <vector>
using namespace std;
vector<pair<int, int>> cnt(41);

pair<int, int> fibo(int n) {
    if (n == 0)
        return cnt[n] = {1, 0};
    else if (n == 1)
        return cnt[n] = {0, 1};
    else if (cnt[n].first)
        return cnt[n];
    else {
        pair<int, int> i0 = fibo(n - 1), i1 = fibo(n - 2);
        return cnt[n] = {i0.first + i1.first, i0.second + i1.second};
    }
}

int main() {
    int t, n;
    cin >> t;
    while (t--) {
        cin >> n;
        pair<int, int> ans = fibo(n);
        cout << ans.first << " " << ans.second << endl;
        fill(cnt.begin(), cnt.end(), make_pair(0, 0));
    }
    return 0;
}