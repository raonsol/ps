#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int bsearch(vector<int> v, int target) {
    int start = 0, end = *max_element(v.begin(), v.end()), mid, ans;
    long long sum;
    while (start <= end) {
        mid = (start + end) / 2;
        sum = 0;
        for (int i = 0; i < v.size(); i++) {
            sum += (long long)((v[i] - mid) > 0 ? v[i] - mid : 0);
            if (sum >= target) break;
        }
        if (sum >= target) {
            ans = mid;
            start = mid + 1;
        }
        else end = mid - 1;
    }
    return ans;
}

int main() {
    int n, m; cin >> n >> m;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end(), greater<int>());
    cout << bsearch(v, m) << endl;
    return 0;
}