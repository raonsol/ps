#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int x, y, r; cin >> x >> y >> r;
    x += 1000; y += 1000;
    int cnt = 0, X, Y;
    double len;
    for (int i = 0; i < 5; i++) {
        cin >> X >> Y;
        X += 1000; Y += 1000;
        len = sqrt((X - x) * (X - x) + (Y - y) * (Y - y));
        if (len <= r) cnt++;
    }
    cout << (cnt ? cnt : -1) << endl;

    return 0;
}