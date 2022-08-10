import java.io.*;
import java.util.StringTokenizer;
public class base {
  private static int ans = 0;

  public static void main(String[] args) throws Exception {
    System.setIn(new FileInputStream("input.txt"));
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st = new StringTokenizer(br.readLine());
    ans = Integer.parseInt(st.nextToken());
    
    bw.write(ans + "\n");    
    bw.flush();
    br.close();
    bw.close();
  }
}

