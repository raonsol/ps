#include <iostream>
#include <vector>
#include <string>
#include <cmath>
using namespace std;

int main() {
    int n, result = 1, i = 2; cin >> n;
    for (int i = 2; i <= n; i++) result *= i;
    cout << result << endl;
    return 0;
}