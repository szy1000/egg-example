<!doctype html>
<html lang="en">
  <head>
    <title>Hacker User</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="telephone=no,email=no"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <!-- <link rel="stylesheet" href="public/css/news.css" />-->
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

    <h1>{{test_Zh}}</h1>

    <ul>
      {% for item in data %}
      <li class="item">
        <label>{{ item.id }}</label>
        <label>{{ item.name }}</label>
        <span>{{item.pwd}}</span>
      </li>
      {% endfor %}
    </ul>
    <hr />
    <h1>user</h1>
    <ul class="news-view view">
      <a href="/">index</a>
    </ul>
  </body>
  <script src="/public/js/login.js"></script>
</html>

