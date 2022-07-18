#include <iostream>
#include <vector>
#include <string>
#include <cmath>
using namespace std;

int main() {
    int n, ans = 1;
    unsigned long long t;
    while (scanf("%d", &n) != EOF) {
        t = 1;
        while (1) {
            if (!(t % n))
                break;
            else {
                // a % b == (a % b) % b
                t = t * 10 + 1;
                t %= n;
                ans++;
            }
        }
        printf("%d\n", ans);
        ans = 1;
    }
    return 0;
}