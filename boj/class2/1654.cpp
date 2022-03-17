#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

long long bsearch(vector<long long> v, long long target) {
    // 주어진 랜선을 아예 안 쓸 수 있으므로 max값부터 탐색
    long long ans = 0, cnt, start = 1, end = *max_element(v.begin(), v.end()), p;
    while (start <= end) {
        cnt = 0;
        p = (start + end) / 2;
        for (long long i : v) cnt += i / p;
        if (cnt >= target) {
            if (p > ans) ans = p;
            start = p + 1;
        }
        else end = p - 1;
    }
    return ans;
}

int main() {
    long long k, n; cin >> k >> n;
    vector<long long> v(k);
    for (int i = 0; i < k; i++) cin >> v[i];
    cout << bsearch(v, n) << '\n';
    return 0;
}