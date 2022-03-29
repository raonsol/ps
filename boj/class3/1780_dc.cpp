#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

int paper[2200][2200], cnt[3] = {0, 0, 0};

// 주어진 부분 검사
bool check_paper(int h, int w, int n) {
    int target = paper[h][w];
    bool flag = true;
    for (int i = h; i < h + n; i++) {
        for (int j = w; j < w + n; j++) {
            if (paper[i][j] != target) {
                flag = false;
                break;
            }
        }
        if (!flag) break;
    }
    return flag;
}

// 검사해서 일치하지 않으면 종이를 분할
void div_paper(int div, int n, int start_h, int start_w) {
    if (check_paper(start_h, start_w, n / div))
        cnt[paper[start_h][start_w]]++;
    else {
        div *= 3;
        int inc = n / div;
        for (int i = start_h; i < start_h + inc * 3; i += inc)
            for (int j = start_w; j < start_w + inc * 3; j += inc)
                div_paper(div, n, i, j);
    }
}

int main() {
    // ios::sync_with_stdio(false);
    // cin.tie(NULL);
    // cout.tie(NULL);
    int n, input;
    cin >> n;

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) {
            cin >> input;
            paper[i][j] = input + 1;
        }

    div_paper(1, n, 0, 0);
    for (auto i : cnt) cout << i << endl;
    return 0;
}