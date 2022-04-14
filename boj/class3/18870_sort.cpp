#include <algorithm>
#include <iostream>
#include <map>
#include <vector>
using namespace std;
#define FAST_IO                  \
    ios::sync_with_stdio(false); \
    cin.tie(NULL);               \
    cout.tie(NULL);

int main() {
    FAST_IO;
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    vector<int> u = v;
    sort(u.begin(), u.end());
    u.erase(unique(u.begin(), u.end()), u.end());

    map<int, int> m;
    for (int i = 0; i < u.size(); i++) m.insert({u[i], i});

    for (int i : v) cout << m[i] << " ";
    return 0;
}