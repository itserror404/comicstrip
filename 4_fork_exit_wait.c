#include <stdio.h>    // puts(), printf(), perror(), getchar()
#include <stdlib.h>   // exit(), EXIT_SUCCESS, EXIT_FAILURE
#include <unistd.h>   // getpid(), getppid(),fork()
#include <sys/wait.h> // wait()

void child() {
  printf(" CHILD <%ld> I'm alive and my PPID = %ld.\n",
         (long) getpid(), (long) getppid());

  printf(" CHILD <%ld> Goodbye!\n",
         (long) getpid());

  exit(EXIT_SUCCESS);
}

void parent(pid_t pid) {

  printf("PARENT <%ld> Spawned a child with PID = %ld.\n",
         (long) getpid(), (long) pid);

  //wait call, block parent execution till child is done
  //can also do pid = wait(NULL) to know pid of the terminated child
  wait(NULL);

  printf("PARENT <%ld> Child with PID = %ld terminated.\n",
         (long) getpid(), (long) pid);

  printf("PARENT <%ld> Goodbye!\n",
         (long) getpid());

  exit(EXIT_SUCCESS);
}

int main(void) {

  pid_t pid;

  switch (pid = fork()) {
  case -1:
    // On error fork() returns -1.
    perror("fork failed");
    exit(EXIT_FAILURE);
  case 0:
    // On success fork() returns 0 in the child.
    child();
  default:
    // On success fork() returns the pid of the child to the parent.
    parent(pid);
  }
}
