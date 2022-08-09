import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())
ans = 0
queenX = [0 for i in range(n)]


def isAval(y, x):
    for i in range(y):
        if queenX[i] == x or abs(queenX[i] - x) == y - i:
            return False
    return True


def dfs(depth):
    for x in range(n):
        if isAval(depth, x):
            if depth == n - 1:
                global ans
                ans += 1
            else:
                queenX[depth] = x
                dfs(depth + 1)


dfs(0)
print(ans)
