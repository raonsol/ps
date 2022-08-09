import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())
ans = 0
queens = []


def dfs(depth):
    for x in range(n):
        isAval = True
        for q in queens:
            if q["x"] == x or abs(q["x"] - x) == depth - q["y"]:
                isAval = False
                break

        if isAval:
            if depth == n - 1:
                global ans
                ans += 1
            else:
                queens.append({"y": depth, "x": x})
                dfs(depth + 1)
                queens.pop()


dfs(0)
print(ans)
