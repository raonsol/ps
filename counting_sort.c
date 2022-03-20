#include <stdio.h>
int main() {
    int count[10001] = { 0, }, sum[10001];
    int n, in; scanf("%d", &n);
    while (n--) {
        scanf("%d", &in);
        count[in]++;
    }
    for (int i = 1; i < 10001; i++)
        while (count[i]--)
            printf("%d\n", i);
    return 0;
}