var posts=["2024/08/17/Docker-关于监听端口/","2024/08/16/hello-world/","2024/08/17/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };