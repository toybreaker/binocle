[binocle.it](https://binocle.it)
---

## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first, by contacting us: info@junglestar.org  
All photos © Binocle. All rights reserved.  
Thanks, Junglestar team  

## Features:

- [X] standalone web-app (after "add to home screen" on android).
- [X] CSV driven menu.
- [X] plain javascript.
- [X] address use [microformat](https://schema.org/Organization). [See test](https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Fbinocle.it%2F)
- [X] work intros use markdown inside {{content}}.
- [X] responsive images with BBC's  [Imager.js](https://github.com/BBC-News/Imager.js/)
- [X] Instagram most-liked picture on homepage with [instafeed.js](https://github.com/stevenschobert/instafeed.js). [see pen](http://codepen.io/rokma/full/zNKGQK/)
- [X] FULL HD - up to 1920px wide shots.
- [X] open-graph & twitter-cards.
- [X] SSL/https thanks to netlify.

## No frills editing guide:

**Set homepage photo**   
Tag the chosen photo with ```#pictureoftheday``` hash. Bum. done! (probably it needs to be a recent uploaded shot...)

**Update contact infos, tel?**     
Change [lines 11>15 in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_config.yml)

**PROFILE fine tuning?**     
Edit [this file](https://github.com/toybreaker/binocle/blob/gh-pages/_includes/editables/profile.md)

**PROFILE image change?**     
Upload a picture named profile.jpg to the shared gdrive folder with same specs as for works images, then it will be processed by gulp as works images. (If in a hurry [upload](https://github.com/toybreaker/binocle/tree/gh-pages/assets/p) 3 pictures properly dimensioned named profile-640.jpg, profile-1024.jpg, profile-1920.jpg overwriting the existing ones.)

**WORKS: disable + enable project?**   
Move project row form [works.csv](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv) to [works_to_finish.csv](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works_to_finish.csv). When done, move it back.

**WORKS: new project?**  
Add a new line [in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv), make a folder with the work name and an index.htm inside it, with the correct front-matter.

## Dev

Dependencies:

```npm install --dev gulp@4.0.0```

```npm install --save-dev gulp-rename```

```npm install --save-dev gulp-responsive```

```npm install --save-dev change-case```

```npm install --save-dev gulp-gm```


### Setup

```bundle install``` setup

```npm install``` setup dependencies


### Dev features

Put images to process in ```/src/p_lower``` if not yet lowercase, or ```/src/p_tif```if .tif, or if already .jpg use ```/src/p_jpg```. Then use:

```gulp lower``` to lowercase all photos names

```gulp tifs``` to produce jpg from tifs

```gulp jpgs``` to produce sized copies into /assets/p, then move it to the properly named folder


Also can use [grafickmagik](http://aheckmann.github.io/gm/docs.html) to work photos 1 by 1, from CLI, like this:

```gm convert pippa-01.tif pippa-01.jpg```

Run Jekyll:

```bundle exec Jekyll serve```


## 2DOs:

- [ ] JS: grab pictureoftheday from home body.el and swap it in head.meta


## LIMITS (BUGS?!)

- Instagram feed serving only 640x640. How to get 1080? We can't. See this [instanfeed.js open bug](https://github.com/stevenschobert/instafeed.js/issues/393) (I'm afraid Instagrams API doesn't support the full resolution yet.)

- instafeed.js: (limit:1) not working
