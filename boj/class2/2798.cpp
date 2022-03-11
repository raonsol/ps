#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main() {
    string n, target;
    while (cin >> n) {
        if (n == "0") break;
        target = n;
        reverse(target.begin(), target.end());
        if (target == n) cout << "yes" << endl;
        else cout << "no" << endl;
    }
    return 0;
}