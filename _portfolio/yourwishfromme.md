---
layout: page
title: Your Wish From Me
description: Your Wish From Me is a crowd-funding, gift-giving website that I developed from 2013-2014.
excerpt: Blah blah blah
featured_image: /assets/img/yourwishfromme/your-wish-from-me-homepage.jpg
permalink: /portfolio/yourwishfromme/
gallery:
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-homepage.jpg
      image_caption: Homepage of Your Wish From Me
      image_alt: Homepage of Your Wish From Me
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-wishlist.jpg
      image_caption: An example of a wishlist on Your Wish From Me
      image_alt: An example of a wishlist on Your Wish From Me 
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-search.jpg
      image_caption: Your Wish From Me uses the Amazon Product Search API to allow users to search for new wishes
      image_alt: Your Wish From Me uses the Amazon Product Search API to allow users to search for new wishes        
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-product.jpg
      image_caption: Your Wish From Me uses the Amazon Product Search API to allow users to search for new wishes
      image_alt: Your Wish From Me uses the Amazon Product Search API to allow users to search for new wishes 
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-similar-products.jpg
      image_caption: Your Wish From Me uses the Amazon Product Search API to allow users to search for new wishes
      image_alt: Your Wish From Me uses the Amazon Product Search API to allow users to search for new wishes      
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-friends.jpg
      image_caption: An example of a wishlist on Your Wish From Me
      image_alt: An example of a wishlist on Your Wish From Me  
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-footer.jpg
      image_caption: Homepage of Your Wish From Me
      image_alt: Homepage of Your Wish From Me
    - image_url: /assets/img/yourwishfromme/your-wish-from-me-login.jpg
      image_caption: Users could use a standard email and password combo to login, or use social media accounts like Facebook and Twitter  
      image_alt: Users could use a standard email and password combo to login, or use social media accounts like Facebook and Twitter     
---

## Description
Your Wish From Me (YWFM) is a crowd-funding, gift-giving website that I developed from 2013-2014 while I was working with [Archarithms, Inc](http://archarithms.com){:target="_blank"}. I served as principal investigator and 
lead developer while working on this project, developing most of the components from scratch. The website is still live at [Your Wish From Me](http://yourwishfromme.com){:target="_blank"} *however* the website 
is no longer maintained as of late 2014 and some of the API features (like Facebook login) no longer work.

The goal of YWFM was to give our users a platform to create wishlists that could then be crowd-funded. A classic user case would be: I want an item worth $500. My friends and family could "give" to the wish in whatever 
increments they choose, $5 to the full price of the wish. When the total is met, the wish is automatically purchased and mailed to the user. Users could make their wishlists my manually searching through products on our website, or by 
importing existing wishlists from Amazon and Bed Bath and Beyond (with intentions of adding other vendors as need arose). YWFM was integrated with Facebook and Twitter, allowing users to easily reach out to friends and share their 
wishes. The wish-buying aspect of the website was completely automated; I developed a bot that would purchase items from Amazon.com as soon as the monetary value of the wish was met.

### Project Screenshots

{% include orbit.html %}

## Technologies Used
YWFM was built primarily using PHP as our backend. It was originally built by heavily modifying the open-source eCommerce platform, OpenCart. OpenCart was chosen because we wanted to develop fast, and OpenCart already provided built-in
shopping carts, user accounts, payment options, and wishlists. Because I used Amazon.com to supply our products rather than manually adding them via the OpenCart admin interface, the OpenCart backend was heavily modified. The Amazon Product Search API 
was used to allow users to search and add products to their wishlist, completey bypassing the database for product details. I also expanded on the built-in wishlists that came with OpenCart, and create. Additionally, I developed the functionality to 
allow for users to import existing wishlists from Amazon or Bed Bath and Beyond using webscraing techniques. Finally, I developed an API connection to allow for YWFM to connect to the databases from other OpenCart websites.

One of the more fun components of the site was making a bot that would automatically purchase items from Amazon. The bot, which was written using CasperJS, simulated a real user browsing the Amazon website. The bot would 
navigate to the product page on Amazon. It would then select the options that the user chose when making a wish (for example, if the user wanted a red t-shirt in medium, it would select red and medium). The bot would then perform some 
testing to make sure that all options were correct, that the product identification numbers were accurate, and that the price was correct and funds were covered. If all conditions were met, the bot would proceed to purchase 
the items, ensuring that the user's address were supplied.


### Technology Overview

Languages used: PHP, HTML5, jQuery, JavaScript, CasperJS, PhantomJS

Frameworks used: OpenCart, CodeIgniter, Foundation (for front-end)

APIs used: Amazon Product Search API, Authorize.net for payment, Facebook Login, Twitter and Pinterest for sharing

### Media & Marketing

In addition to the development of the website, I also managed the social media and marketing of the website. 