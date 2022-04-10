# 100C1 == 100
# 100C2 == 100*99/2 == 100C1*(99/2)
# 100C3 == 100*99*98/3*2 == 100C2*(98/3)
n, m = map(int, input().split())
dp = [0] * (m + 1)
dp[1] = n
for i in range(2, m + 1):
    dp[i] = dp[i - 1] * (n - i + 1) // i  # 부동소수점 오차 주의
print(dp[m])
