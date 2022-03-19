#include <iostream>
#include <vector>
#include <limits>
#include <algorithm>
using namespace std;

int main() {
    int n, tmp; cin >> n;
    vector<int> v(n), calc;
    for (int i = 0; i < n; i++) cin >> v[i];
    //+-*/ 순서
    for (int i = 0; i < 4; i++) {
        cin >> tmp;
        for (int j = 0; j < tmp; j++)
            calc.push_back(i);
    }
    int max = numeric_limits<int>::min(), min = numeric_limits<int>::max(), sum;
    do {
        sum = v[0];
        for (int i = 1; i < n; i++) {
            switch (calc[i - 1]) {
            case 0:
                sum += v[i];
                break;
            case 1:
                sum -= v[i];
                break;
            case 2:
                sum *= v[i];
                break;
            case 3:
                sum /= v[i];
                break;
            }
        }
        if (sum > max) max = sum;
        if (sum < min) min = sum;
    } while (next_permutation(calc.begin(), calc.end()));

    cout << max << '\n' << min << endl;
    return 0;
}