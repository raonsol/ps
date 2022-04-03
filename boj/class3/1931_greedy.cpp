#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

bool compare(pair<int, int> a, pair<int, int> b) {
    if (a.second == b.second)
        return a.first < b.first;
    else
        return a.second < b.second;
}

int main() {
    int n;
    cin >> n;
    vector<pair<int, int>> meet(n);
    int i1, i2;
    for (int i = 0; i < n; i++) {
        cin >> i1 >> i2;
        meet[i] = make_pair(i1, i2);
    }
    sort(meet.begin(), meet.end(), compare);

    int fin = 0, cnt = 0;
    for (int i = 0; i < n; i++) {
        if (meet[i].first >= fin) {
            fin = meet[i].second;
            cnt++;
        }
    }
    cout << cnt << endl;
    return 0;
}
