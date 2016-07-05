---
layout: page
title: Portfolio
permalink: /portfolio/
---

This section of the site serves as my portfolio for my various web development projects. 
Many of the projects below are open-source and can be found on my [GitHub](https://github.com/christinabranson){:target="_blank"} account.

<table>
  <thead>
    <tr>
      <th width="200">Name</th>
      <th width="150">Description</th>
      <th width="150">Screenshot</th>
    </tr>
  </thead>
  <tbody>
  {% for doc in site.portfolio %}
    <tr>
      <td><a href="{{ doc.url }}">{{ doc.title }}</a></td>
      <td>{{ doc.description }}</td>
      <td><img src="{{ doc.featured_image }}" class="thumbnail" /></td>
    </tr>
  {% endfor %}
  </tbody>
</table>