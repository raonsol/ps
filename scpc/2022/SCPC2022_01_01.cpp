#include <algorithm>
#include <cstdio>
#include <iostream>
#include <vector>
using namespace std;
#define FAST_IO                \
  ios::sync_with_stdio(false); \
  cin.tie(NULL);               \
  cout.tie(NULL);

long long Answer;

int main(int argc, char** argv) {
  int T, test_case;
  FAST_IO;
  /*
     The freopen function below opens input.txt file in read only mode, and
     afterward, the program will read from input.txt file instead of
     standard(keyboard) input. To test your program, you may save input data in
     input.txt file, and use freopen function to read from the file when using
     cin function. You may remove the comment symbols(//) in the below statement
     and use it. Use #include<cstdio> or #include <stdio.h> to use the function
     in your program. But before submission, you must remove the freopen
     function or rewrite comment symbols(//).
   */

  freopen("input.txt", "r", stdin);

  cin >> T;
  for (test_case = 0; test_case < T; test_case++) {
    Answer = 0;
    /////////////////////////////////////////////////////////////////////////////////////////////
    /*
       Implement your algorithm here.
       The answer to the case will be stored in variable Answer.
     */
    /////////////////////////////////////////////////////////////////////////////////////////////

    // 어떠한 배열의 정렬 후 위치 변화의 최소값
    int n;
    cin >> n;
    vector<pair<int, int>> v(n);  // {val, loc}
    vector<int> loc(n);
    for (int i = 0; i < n; i++) {
      cin >> loc[i];
      v[i].second = loc[i];
    }
    for (int i = 0; i < n; i++) cin >> v[i].first;
    sort(v.begin(), v.end());
    for (int i = 0; i < n; i++) {
      Answer += (long long)abs(loc[i] - v[i].second);
    }

    // Print the answer to standard output(screen).
    cout << "Case #" << test_case + 1 << endl;
    cout << Answer << endl;
  }

  return 0;  // Your program should return 0 on normal termination.
}