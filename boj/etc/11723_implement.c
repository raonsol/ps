#include <stdio.h>
#include <string.h>

int main() {
  int num[21] = {0}, empty[21] = {0}, all[21], m, n;
  for (int i = 1; i <= 20; i++) all[i] = i;
  scanf("%d", &m);

  while (m--) {
    char input[7];
    scanf("%s", input);
    if (strcmp(input, "all") || strcmp(input, "empty")) scanf("%d", &n);

    if (!strcmp(input, "add")) {
      if (!num[n]) num[n] = 1;
    } else if (!strcmp(input, "remove")) {
      if (num[n]) num[n] = 0;
    } else if (!strcmp(input, "check")) {
      printf("%d\n", num[n] ? 1 : 0);
    } else if (!strcmp(input, "toggle")) {
      if (num[n])
        num[n] = 0;
      else
        num[n] = 1;
    } else if (!strcmp(input, "all")) {
      memcpy(num, all, sizeof(all));
    } else if (!strcmp(input, "empty")) {
      memcpy(num, empty, sizeof(empty));
    }
  }
  return 0;
}