#include <iostream>
using namespace std;

int main() {
    int e, s, m; scanf("%d %d %d", &e, &s, &m);
    int e1 = 0, s1 = 0, m1 = 0;
    int result = 0;
    while (1) {
        e1++; s1++; m1++;
        if (e1 > 15) e1 = 1;
        if (s1 > 28) s1 = 1;
        if (m1 > 19) m1 = 1;
        result++;
        if (e1 == e && s1 == s && m1 == m) break;
    }
    printf("%d\n", result);
    return 0;
}