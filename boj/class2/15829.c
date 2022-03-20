#include <stdio.h>
#include <string.h>
#define M 1234567891
#define R 31

int main() {
    int l; char input[51];
    scanf("%d %s", &l, input);
    unsigned long long ans = 0, p = 1;
    for (int i = 0; i < l; i++) {
        ans = (ans + ((input[i] - 'a' + 1) * p) % M) % M;
        p = (p * R) % M;
        // ans += (unsigned long long)((input[i] - 'a' + 1) * pow(31, i)) % M; // 문자열이 길어지면 범위초과
    }
    printf("%llu\n", ans);
    return 0;
}