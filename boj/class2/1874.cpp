#include <iostream>
#include <vector>
#include <stack>
using namespace std;

int main() {
    int n; cin >> n;
    vector<int> v(n);
    stack<int> s;
    vector<char> out;
    int prev = 0, last_push = 0;
    bool flag = true;

    // 다음 숫자가 더 작아졌을 경우 top의 숫자와 다르면 NO, 아니면 한번 pop
    // 다음 숫자가 더 커졌는데 마지막으로 push한 숫자보다 같거나 작으면 NO
    // 아니면 해당 숫자만큼 push하고 제일 위에 pop
    for (int i = 0; i < n; i++) {
        cin >> v[i];
        if (v[i] > prev) {
            if (v[i] <= last_push)
                flag = false;
            else {
                for (int j = last_push + 1; j <= v[i]; j++) {
                    s.push(j);
                    out.push_back('+');
                }
                last_push = v[i];
                s.pop();
                out.push_back('-');
            }
        }
        else {
            if (s.top() != v[i])
                flag = false;
            else {
                s.pop();
                out.push_back('-');
            }
        }
        if (!flag) break;
        prev = v[i];
    }
    if (flag) {
        for (char a : out) cout << a << '\n';
    }
    else cout << "NO" << endl;
    return 0;
}