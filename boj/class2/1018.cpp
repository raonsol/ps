#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
using namespace std;

int main() {
    int n, m; cin >> n >> m;
    vector<string> board(n);
    vector<vector<bool>> unmatch_w(n, vector<bool>(m, false)); //WB, 짝수줄 짝수, 홀수줄 홀수=W
    vector<vector<bool>> unmatch_b(n, vector<bool>(m, false)); //BW, 짝수줄 짝수, 홀수줄 홀수=B
    for (int i = 0; i < n; i++) cin >> board[i];

    // 일치여부 check
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            //홀+홀==짝+짝==짝, 홀+짝==홀
            if (!((i + j) % 2)) {     //짝짝 or 홀홀
                if (board[i][j] == 'B')
                    unmatch_w[i][j] = true;
                else unmatch_b[i][j] = true;
            }
            else {                  //짝홀 or 홀짝
                if (board[i][j] == 'W')
                    unmatch_w[i][j] = true;
                else unmatch_b[i][j] = true;
            }
        }
    }

    int cnt_w, cnt_b, ans = 64;
    string cmp_str;
    //(i, j)부터 8*8만큼 비교
    for (int i = 0; i <= n - 8; i++) {
        for (int j = 0; j <= m - 8; j++) {
            cnt_w = 0, cnt_b = 0;
            for (int k = 0; k < 8; k++) {
                for (int l = 0; l < 8; l++) {
                    if (unmatch_w[i + k][j + l]) cnt_w++;
                    if (unmatch_b[i + k][j + l]) cnt_b++;
                }
            }
            if (cnt_w < cnt_b && cnt_w < ans)
                ans = cnt_w;
            else if (cnt_b <= cnt_w && cnt_b < ans)
                ans = cnt_b;
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << unmatch_w[i][j];
        }
        cout << endl;
    }
    cout << "" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << unmatch_b[i][j];
        }
        cout << endl;
    }
    cout << ans << endl;
    return 0;
}