[binocle.it](binocle.it)
---

## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first by contacting us: info@junglestar.org  
All photos © Binocle. All rights reserved.  
Thanks, Junglestar team  

## Features:
- [X] standalone webapp (after "add to home screen" on android).
- [X] csv driven menu.
- [X] plain javascript.
- [X] address use [microformat](https://schema.org/Organization)
- [X] work intros use markdown inside {{content}}.
- [X] responsive images with BBC's . [Imager.js](https://github.com/BBC-News/Imager.js/)
- [X] Instagram most-liked picture on homepage.
- [X] FULL HD - up to 1920px wide shots.

## No frills editing Guide:

**Set homepage photo**   
Tag the chosen photo with ```#pictureoftheday``` hash. Bum. done! (it prob needs to be a recent upload...)

**Update contact infos, tel?**     
Change [lines 11>15 in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_config.yml)

**PROFILE fine tuning?**     
Edit [this file](https://github.com/toybreaker/binocle/blob/gh-pages/_includes/editables/profile.md)

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

- [ ] work's text now blocky, make it readeable!


## BUGS?!

- [ ] home instagram, feed serving only 640x640. how to get 1080?

- [ ] instafeed.js: (limit:1) not working
