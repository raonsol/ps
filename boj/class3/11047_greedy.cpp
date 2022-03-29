#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, k, max_idx = 0;
    cin >> n >> k;
    vector<int> values(n);
    for (int i = 0; i < n; i++) {
        cin >> values[i];
        if (values[i] <= k) max_idx = i;
    }
    int cnt = 0;
    do {
        if (k - values[max_idx] < 0)
            max_idx--;
        else {
            cnt++;
            k -= values[max_idx];
        }
    } while (max_idx >= 0);
    cout << cnt << endl;
    return 0;
}