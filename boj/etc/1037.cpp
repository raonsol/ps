#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
// 약수가 1개 == 자기 자신 제곱
// 여러개 == 가장 작은 약수 * 가장 큰 약수
int main() {
    int n, t, ans=0; scanf("%d", &n);
    vector<int> input;
    for (int i = 0; i < n; i++) {
        scanf("%d", &t);
        input.push_back(t);
    }
    if (n == 1)
        ans = input.front() * input.front();
    else {
        sort(input.begin(), input.end());
        ans=input.front() * input.back();
    }
    printf("%d\n", ans);
    return 0;
}