#include <stdio.h>
#include <string.h>
#include <math.h>

void add_big(char* a, char* b, char* ans, int diff) {
    int flag_carry = 0, sum_val, idx = 0;
    for (int i = strlen(a) - 1; i >= 0; i--) {
        sum_val = a[i] - '0';
        if (i - diff >= 0) sum_val += b[i - diff] - '0';
        if (flag_carry) {
            sum_val++;
            flag_carry = 0;
        }
        if (sum_val >= 10) {
            sum_val -= 10;
            flag_carry = 1;
        }
        ans[idx++] = sum_val + '0';
    }
    // 만약 마지막 루프에 올림이 생기면 출력시 맨 앞에 1 추가
    if (flag_carry) {
        ans[strlen(ans)] = '1';
    }
}

void minus_big(char* a, char* b, char* ans, int diff) {
    int flag_carry = 0, minus_val, idx = 0;
    for (int i = strlen(a) - 1; i >= 0; i--) {
        minus_val = a[i] - '0';
        if (i - diff >= 0) minus_val -= b[i - diff] - '0';
        if (flag_carry) {
            minus_val--;
            flag_carry = 0;
        }
        if (minus_val < 0) {
            minus_val += 10;
            flag_carry = 1;
        }
        ans[idx++] = minus_val + '0';
    }
}

int main() {
    char a[10002], b[10002], tmp[10002], ans[20004] = "";
    scanf("%s %s", a, b);
    int flag_swap = 0, flag_sign1 = -1, flag_sign2 = -1;

    //입력받은 문자열에서 부호 제거
    if (a[0] == '-') {
        flag_sign1 = 1;
        for (int i = 0; i < strlen(a) - 1; i++) {
            a[i] = a[i + 1];
        }
        a[strlen(a) - 1] = '\0';
    }
    if (b[0] == '-') {
        flag_sign2 = 1;
        for (int i = 0; i < strlen(b) - 1; i++) {
            b[i] = b[i + 1];
        }
        b[strlen(b) - 1] = '\0';
    }

    //크기 판단
    if (strlen(a) < strlen(b)) flag_swap = 1;
    else if (strlen(a) == strlen(b)) {
        for (int i = 0; i < strlen(a); i++) {
            if (a[i] < b[i]) {
                flag_swap = 1;
                break;
            }
            else if (a[i] > b[i]) {
                break;
            }
        }
    }

    if (flag_swap) {
        strcpy(tmp, a);
        strcpy(a, b);
        strcpy(b, tmp);
    }

    //계산결과 부호 판단
    char prefix = NULL;
    if (flag_sign1 == 1 && flag_sign2 == 1) prefix = '-';
    else if ((flag_sign1 == 1 && flag_swap == 0) || (flag_sign2 == 1 && flag_swap == 1)) prefix = '-';

    //계산
    int diff = fabs(strlen(a) - strlen(b));
    if (flag_sign1 * flag_sign2 == 1) add_big(a, b, ans, diff);
    else minus_big(a, b, ans, diff);

    //결과가 0인지 판단
    int flag_print = 0;
    for (int i = (int)strlen(ans) - 1; i >= 0; i--)
        if (ans[i] != '0') {
            flag_print = strlen(ans) - i;
            break;
        }

    //부호 있으면 먼저 출력한 뒤 숫자 출력
    if (flag_print) {
        if (prefix) printf("%c", prefix);
        for (int i = (int)strlen(ans) - flag_print; i >= 0; i--)
            printf("%c", ans[i]);
    }
    else printf("0");
    printf("\n");
    return 0;
}