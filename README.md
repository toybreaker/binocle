[binocle.it](http://binocle.it)
---

## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first by contacting us: info@junglestar.org  
All photos © Binocle. All rights reserved.  
Thanks, Junglestar team  

## Features:
- [X] standalone web-app (after "add to home screen" on android).
- [X] csv driven menu.
- [X] plain javascript.
- [X] address use [microformat](https://schema.org/Organization)
- [X] work intros use markdown inside {{content}}.
- [X] responsive images with BBC's  [Imager.js](https://github.com/BBC-News/Imager.js/)
- [X] Instagram most-liked picture on homepage with [instafeed.js](https://github.com/stevenschobert/instafeed.js). [see pen](http://codepen.io/stevenschobert/pen/vJloI)
- [X] FULL HD - up to 1920px wide shots.
- [X] open-graph & twitter-cards.

## No frills editing Guide:

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
Add a new line [in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv)


## dev

Dependencies:

```npm install --save imager.js```

```npm install --save-dev gulp-rename```

```npm install --save-dev gulp-responsive```

```npm install --save-dev change-case```

```npm install --save-dev gulp-gm```


### setup

```bundle install``` setup

```npm install``` setup dependencies


### dev features

Use ```/src/p_input``` and  ```/src/p_jpeg``` to store photos to process. Then use:

```gulp``` task to compile sass and enable browsersync

```gulp lower``` to lowercase all photo names

```gulp tifs``` to produce jpg from tifs

```gulp jpgs``` to produce sized copies


Also can use [grafickmagik](http://aheckmann.github.io/gm/docs.html) to work photos 1 by 1, from CLI, like this:

```gm convert pippa-01.tif pippa-01.jpg```

Run Jekyll:

```bundle exec Jekyll serve```



## 2DOs:

- [ ] menu salta su win edge ie
- [ ] segoue ui nn esce su chrome win
- [ ] JS: grab pictureoftheday form home body.el and swap it in head.meta

- [X] logo footer invert
- [X] azzurro attivo diventa trasparente
- [X] grigio webapp diventa bianco

## LIMITS (BUGS?!)

- Instagram feed serving only 640x640. How to get 1080? We can't. See this [instanfeed.js open bug](https://github.com/stevenschobert/instafeed.js/issues/393) (I'm afraid Instagrams API doesn't support the full resolution yet.)

- instafeed.js: (limit:1) not working
