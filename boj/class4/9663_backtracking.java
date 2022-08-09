import java.io.*;
import java.util.StringTokenizer;

public class Main {
  private static int queenX[];
  private static int ans = 0;

  private static Boolean isAval(int y, int x) {
    for (int i = 0; i < y; i++) {
      if (queenX[i] == x || Math.abs(queenX[i] - x) == y - i) {
        return false;
      }
    }
    return true;
  }

  private static void dfs(int depth, int n) {
    for (int x = 0; x < n; x++) {
      if (isAval(depth, x)) {
        if (depth == n - 1)
          ans++;
        else {
          queenX[depth] = x;
          dfs(depth + 1, n);
        }
      }
    }
  };

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream("input.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    queenX = new int[n];
    dfs(0, n);

    bw.write(ans + "\n");
    bw.flush();
    br.close();
    bw.close();
  }
}