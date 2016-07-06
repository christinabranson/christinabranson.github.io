---
layout: post
title:  "Web App In 24 Hours"
date:   2016-06-22 03:37:00 +0000
categories: personal
header_image: /assets/img/perler-designs.jpg
featured_image: /assets/img/perler-designs.jpg
excerpt: Hi this is an excertp
---

I'm definitely still a Laravel novice, but I'm a big believer that the best way to learn is to do. So, I decided to work on a little project. The goal is to 
develop as much of a complete web application as possible in only 24 hours.

### The Rules

The rules I decided on were pretty simple:

1. Only 24 hours of working time to finish. (I can take breaks to do the boring stuff like eating and sleeping.)
2. Develop from scratch.
3. Use Laravel using as my framework.
4. Document as much as possible.

### The Tools

Backend

1. Laravel PHP framework
2. MySQL database
3. Git for source control

Frontend

1. Foundation 5
2. jQuery

### The Project

Picking a project took surprisingly little time. One of my spare-time hobbies is creating those little perler bead designs. It's a little silly and childish (I certainly
made a lot of them when I was a kid), but now that I'm only and occasionally looking to destress, it's my hobby of choice. So, I decided to make a little website that 
will allow users (read: me) to create and save my own designs. And so, I introduce *Sprite-R*. Pronounced "spriter", because if I can still do arts and crafts like I'm still a kid then 
I should also be able to name projects like it's still Web 2.0.

### The Process

I started off with a development plan and a look at my requirements:

* Allow users to develop sprite designs with an HTML5/jQuery user interface
* Save these designs to a database associated with their username
* View, edit, and delete their previously made sprites
* Associate sprites with sprite names and sprite tags
* Search previously made designs, by user, sprite name, or sprite tags

From, there, designing the database:

##### Users

| Column | Properties | Description |
| ---- | ---- | ---- |
| user_id | increments | ID of user |
| name | string | User name |
| email | string | User email |
| password |string | User password, associated with password_resets table |
| token | --|  |
| timestamps |--| Created and modified |

Relationships:

* Users can have many sprites
* Users can tag their sprites with many tags

##### Sprite

| Column | Properties | Description |
| ---- | ---- | ---- |
| sprite_id | increments | ID of sprite |
| user_id | integer | Associate sprite with a user |
| name | string | Name of sprite |
| content | mediumText | Serialized content of sprite |
| timestamps |--| Created and modified |

Relationships:

* Sprites can be associated with one user
* Sprites can be associated with many tags

##### Tags

| Column | Properties | Description |
| ---- | ---- | ---- |
| tag_id | increments | ID of tag |
| tag_name | string | Tag name |
| timestamps |--| Created and modified |

Relationships:

* Tags are associated directly with no users
* Tags can be associated with many sprites

##### Sprite Tag

| Column | Properties | Description |
| ---- | ---- | ---- |
| sprite_id | integer | Tag of sprite |
| tag_id | integer | ID of tag |


I then determined which views I'll need:

##### Views
* User login
* Create/save a sprite
* Edit a sprite
* View all of a user's sprites
* Search sprites by name, tag, user

And, finally, determined the routes and functions that will be developed:

##### Routes

| URL | Method | Description | Code |
| ---- | ---- | ---- | ---- |
| / | get | Get home page | `Route::get('/home', 'HomeController@index');` |
| /sprite/{sprite}  | get | Get a sprite | `Route::get('/sprite/{sprite}', 'SpriteController@getSprite');` |
| /sprite/new  | get | Get page to create a sprite | `Route::get('/sprite/new', 'SpriteController@newSprite');` |
| /sprite/new  | post | Create a sprite | `Route::post('/sprite/new', 'SpriteController@createSprite');` |
| /sprite/edit/{sprite}  | get | Get page to edit a sprite | `Route::get('/sprite/edit/{sprite}', 'SpriteController@editSprite');` |
| /sprite/edit/{sprite}  | post | Edit a sprite | `Route::post('/sprite/new', 'SpriteController@updateSprite');` |
| /sprite/delete/{sprite}  | delete | Delete a sprite | `Route::post('/sprite/delete/{sprite} ', 'SpriteController@deleteSprite');` |

Once I had all the components in place and a general design finished, it was time to code. The Laravel code went by fairly quickly to create the functions to add and edit a sprite. 
Laravel allows you to add authentication extremely quickly so there was hardly any time at all spent doing that.

I generally design and code the views on Codepen, and this app was no exception. The inital preliminary website designs 
can be seen [here](http://codepen.io/christinabranson/pen/LNodOB){:target="_blank"} and [here](http://codepen.io/christinabranson/pen/PzGgOw){:target="_blank"}. The front-end
requires quite a bit of jQuery in order to serialize the sprite design to be able to store it in the database.

Unfortunately, the bulk of the time that I spent on this was to develop and test the front end. My twenty-four hours ended before I could create the functions to delete a sprite. I also 
didn't have sufficient time to properly test the application, or to implement the tagging functionality.


### Lessons Learned:

1. 24 hours is really not a lot of time.
2. If I want to work on my backend, I should probably pick a project with a simpler front-end.

I may finish the application as time permits. I never had any intention of releasing it as a functioning application, but I do plan on leaving [the source code](https://github.com/christinabranson/sprite-r){:target="_blank"} available.