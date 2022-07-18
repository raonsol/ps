#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

bool comp(string a, string b) {
    return a + b > b + a;
}

int main() {
    int n; cin >> n;
    vector<string> numbers(n);
    for (int i = 0; i < n; i++) cin >> numbers[i];
    
    string ans = "";
    sort(numbers.begin(), numbers.end(), comp);
    if (numbers[0] == "0") ans = "0";
    else for (string number : numbers) ans += number;
    cout << ans << endl;
    return 0;
}