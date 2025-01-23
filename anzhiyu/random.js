var posts=["2024/08/17/Docker-关于监听端口/","2025/01/23/test/","2024/09/14/CS61C/Lecture 3 Abstractions 1 Threads and Processes A quick, programmer’s viewpoint/","2024/11/04/字节内部课程/前端设计模式应用/","2024/11/04/字节内部课程/客户端容器/","2024/11/03/字节内部课程/计算机网络概论-字节内部课/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };