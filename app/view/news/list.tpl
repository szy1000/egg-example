<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      <a href="/">index</a>
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
          <span>{{item.time}}</span>
          {{ helper.relativeTime(item.time) }}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>

