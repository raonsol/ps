def solution(answers):
    cnt = [0] * 3
    p = [[0] * len(answers) for _ in range(3)]
    ar2 = [1, 3, 4, 5]
    ar3 = [3, 1, 2, 4, 5]
    for i in range(len(answers)):
        p[0][i] = (i + 1) % 5 if (i + 1) % 5 else 5
        p[1][i] = ar2[(int)(i / 2) % 4] if i % 2 else 2
        p[2][i] = ar3[(int)(i / 2) % 5]
        for j in range(3):
            if p[j][i] == answers[i]:
                cnt[j] += 1
    m = max(cnt)
    answer = [i + 1 for i, v in enumerate(cnt) if v == m]
    return answer

answers = [1, 3, 2, 4, 2]
print(solution(answers))
