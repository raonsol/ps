#include <iostream>
#include <vector>
#include <string>
#include <cmath>
#include <algorithm>
using namespace std;

void add_big(string& a, string& b, string& ans) {
    bool flag_carry = 0;
    int sum_val, diff = fabs(a.length() - b.length());
    for (int i = a.length() - 1; i >= 0; i--) {
        sum_val = a[i] - '0';
        if (i - diff >= 0) sum_val += b[i - diff] - '0';
        if (flag_carry) {
            sum_val++;
            flag_carry = false;
        }
        if (sum_val >= 10) {
            sum_val -= 10;
            flag_carry = true;
        }
        ans += sum_val + '0';
    }
    // 만약 마지막 루프에 올림이 생기면 출력시 맨 앞에 1 추가
    if (flag_carry) {
        ans += '1';
    }
}

void minus_big(string& a, string& b, string& ans) {
    bool flag_carry = 0;
    int minus_val, idx = 0, diff = fabs(a.length() - b.length());
    for (int i = a.length() - 1; i >= 0; i--) {
        minus_val = a[i] - '0';
        if (i - diff >= 0) minus_val -= b[i - diff] - '0';
        if (flag_carry) {
            minus_val--;
            flag_carry = false;
        }
        if (minus_val < 0) {
            minus_val += 10;
            flag_carry = true;
        }
        ans += minus_val + '0';
    }
}

int main() {
    string a, b, ans = "";
    cin >> a >> b;
    int flag_swap = 0, flag_sign1 = -1, flag_sign2 = -1;

    //입력받은 문자열에서 부호 제거
    if (a[0] == '-') {
        flag_sign1 = 1;
        a.erase(0, 1);
    }
    if (b[0] == '-') {
        flag_sign2 = 1;
        b.erase(0, 1);
    }
    //크기 판단
    if (a.length() < b.length() || (a.length() == b.length() && a < b)) {
        flag_swap = 1;
        swap(a, b);
    }

    //계산결과 부호 판단
    char prefix = '\0';
    if (flag_sign1 == 1 && flag_sign2 == 1) prefix = '-';
    else if ((flag_sign1 == 1 && flag_swap == 0) || (flag_sign2 == 1 && flag_swap == 1))
        prefix = '-';

    //계산
    if (flag_sign1 * flag_sign2 == 1) add_big(a, b, ans);
    else minus_big(a, b, ans);

    //결과가 0이면 따로 처리
    if (*max_element(ans.begin(), ans.end()) == '0')
        cout << '0';
    else {
        //부호 있으면 먼저 출력한 뒤 숫자 출력
        if (prefix) cout << prefix;
        reverse(ans.begin(), ans.end());
        bool print_flag = false;
        for (char i : ans) {
            if (!print_flag && i != '0') print_flag = true;
            if (print_flag) cout << i;
        }
    }
    cout << endl;
    return 0;
}