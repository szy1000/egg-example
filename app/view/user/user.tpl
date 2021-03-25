<html>
  <head>
    <title>Hacker User</title>
<!--    <link rel="stylesheet" href="public/css/news.css" />-->
  </head>
  <body>

  {% if res %}
   <h1>{{res}}</h1>
    <button onclick="logout()">退出</button>
  {% else %}
    <h1>未登录</h1>
    <button onclick="login()">登录</button>

  {% endif %}

  <ul>
    <li><label for="name">用户名</label><input id="name" type="text"></li>
    <li><label for="password">密码</label><input id="password" type="password"></li>
    <button id="register" onclick="register()">注册</button>
  </ul>

  <h1>  {{test_Zh}}</h1>

    <p>{{ data }}</p>
    <h1>user</h1>
    <ul class="news-view view">
      <a href="/">index</a>
    </ul>
  </body>

  <script src="/public/js/login.js"></script>
</html>

