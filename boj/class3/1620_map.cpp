#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int m, n;
    cin >> n >> m;
    vector<string> dic_n(n + 1);
    unordered_map<string, int> dic_name;

    string input;
    for (int i = 1; i <= n; i++) {
        cin >> input;
        dic_n[i] = input;
        dic_name[input] = i;
    }
    while (m--) {
        cin >> input;
        if (input[0] >= '0' && input[0] <= '9')
            cout << dic_n[stoi(input)] << '\n';
        else
            cout << dic_name[input] << '\n';
    }
    return 0;
}