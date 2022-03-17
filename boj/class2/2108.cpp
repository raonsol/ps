#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>
#include <cmath>
using namespace std;

bool compare(pair<int, int> a, pair<int, int> b) {
    if (a.second == b.second) return a.first < b.first;
    else return a.second > b.second;
}
int main() {
    int n; cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end());   //n*logn
    int ran = v[n - 1] - v[0];
    int avg = round(accumulate(v.begin(), v.end(), 0.0) / v.size());    //n
    int mid = v[v.size() / 2];

    vector<int> cnt(8001, 0);
    for (auto i : v) cnt[i + 4000]++;
    int max_cnt = 0, mod;
    for (int i = 0; i < 8001; i++) {
        if (cnt[i] > max_cnt) {
            max_cnt = cnt[i];
            mod = i;
        }
    }
    for (int i = mod + 1; i < 8001; i++) {
        if (cnt[i] == max_cnt) {
            mod = i;
            break;
        }
    }
    mod -= 4000;

    cout << avg << '\n' << mid << '\n' << mod << '\n' << ran << '\n';
    return 0;
}