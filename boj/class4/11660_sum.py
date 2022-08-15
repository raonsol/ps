import sys

# sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n, m = map(int, input().split(" "))
table = [[0 for j in range(n + 1)] for i in range(n + 1)]
sumTable = [[0 for j in range(n + 1)] for i in range(n + 1)]

for i in range(1, n + 1):
    tmp = list(map(int, input().split(" ")))
    for j in range(1, n + 1):
        table[i][j] = tmp[j - 1]
        sumTable[i][j] = (
            sumTable[i - 1][j]
            + sumTable[i][j - 1]
            - sumTable[i - 1][j - 1]
            + table[i][j]
        )

for t in range(m):
    y1, x1, y2, x2 = map(int, input().split(" "))
    ans = (
        sumTable[y2][x2]
        - sumTable[y2][x1 - 1]
        - sumTable[y1 - 1][x2]
        + sumTable[y1 - 1][x1 - 1]
    )
    print(ans)
