#include <iostream>
#include <vector>
using namespace std;

int count_array(vector<vector<char>> input) {
    int max = 1, cnt_row = 1, cnt_col = 1;
    char row, col;
    for (int i = 0; i < input.size(); i++) {
        row = input[i][0];
        col = input[0][i];
        for (int j = 1; j < input.size(); j++) {
            if (row != input[i][j]) {
                if (cnt_row > max) max = cnt_row;
                row = input[i][j];
                cnt_row = 1;
            }
            else cnt_row++;

            if (col != input[j][i]) {
                if (cnt_col > max) max = cnt_col;
                col = input[j][i];
                cnt_col = 1;
            }
            else cnt_col++;
        }
        if (cnt_row > max) max = cnt_row;
        if (cnt_col > max) max = cnt_col;
        cnt_row = 1;
        cnt_col = 1;
    }

    return max;
}

int main() {
    int n; scanf("%d", &n);
    vector<vector<char>> input(n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            char c; scanf(" %c", &c);
            input[i].push_back(c);
        }
    }

    int max = count_array(input);
    char tmp;
    vector<vector<char>> swapped;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - 1; j++) {
            //가로줄 스왑
            swapped = input;
            swapped[i][j + 1] = input[i][j];
            swapped[i][j] = input[i][j + 1];
            if (count_array(swapped) > max)
                max = count_array(swapped);

            //세로줄 스왑
            swapped = input;
            swapped[j + 1][i] = input[j][i];
            swapped[j][i] = input[j + 1][i];
            if (count_array(swapped) > max)
                max = count_array(swapped);
        }
    }

    printf("%d\n", max);
    return 0;
}