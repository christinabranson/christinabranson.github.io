---
layout: page
title: Portfolio
permalink: /portfolio/
---

This section of the site serves as my portfolio for my various web development projects. 
Many of the projects below are open-source and can be found on my [GitHub](https://github.com/christinabranson){:target="_blank"} account.

{% for doc in site.portfolio %}
  <h3><a href="{{ doc.url }}">{{ doc.title }}</a></h3>
  <p>{{ doc.description }}</p>
{% endfor %}