#include <iostream>
#include <algorithm>
#include <set>
#include <string>
using namespace std;

struct Compare {
    bool operator()(const string& a, const string& b) const {
        if (a.length() == b.length()) return a < b;
        else return a.length() < b.length();
    }
};

int main() {
    int n; cin >> n;
    set<string, Compare> input;
    string tmp;
    for (int i = 0; i < n; i++) {
        cin >> tmp;
        input.insert(tmp);
    }
    for (auto i : input) cout << i << endl;
    return 0;
}