#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int binomial(int n, int r) {
	if(r == 0 || n == r) 
		return 1;
	return binomial(n - 1, r - 1) + binomial(n - 1, r);
}

int main() {
    int n, k; cin >> n >> k;
    cout << binomial(n, k) << endl;
    return 0;
}