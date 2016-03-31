binocle
---

## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first by contacting us: info@junglestar.org  
All photos © Binocle. All rights reserved.  
Thanks, Junglestar team  

## Features:
- [X] standalone webapp (after "add to home screen" on android)
- [X] csv driven menu
- [X] plain javascript
- [X] address use [microformat](https://schema.org/Organization)
- [X] work intro use markdown inside {{content}}


## No frills editing Guide:

**set homepage photo**
Tag the chosen photo with ```#pictureoftheday``` hash. Bum. done! (it prob needs to be a recent upload...)

**New work project?**  
Add a new line [in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv)

**Update contact infos, tel?**     
Change [lines 11>15 in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_config.yml)

**Profile fine tuning?**    
Edit [this file](https://github.com/toybreaker/binocle/blob/gh-pages/_includes/editables/profile.md)

**WORKS: disable + enable project?** Move project row form [works.csv](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv) to [works_to_finish.csv](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works_to_finish.csv). When done move it back.


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


Also can use this to work photos 1 by 1, from CLI:
```gm convert pippa-01.tif pippa-01.jpg```
 [grafickmagik](http://aheckmann.github.io/gm/docs.html)



 Run Jekyll:

```bundle exec Jekyll serve```


#### frontend features:

 - no jquery yet...

 - [RWD](https://en.wikipedia.org/wiki/Responsive_web_design) with [Imager.js](https://github.com/BBC-News/Imager.js/) to handle images



## 2DOs:

- [ ] responsive images

- [ ] invece dell'azzurro (:focus outline) quando schiacci testo link su mobile.  
Su mobile se clicco su progetti (per es. BASTARDSTORE) c’è ancora highlight blu. Sarebbe bello se fosse nero con testo bianco per una frazione di secondo quando clicco, così da feedback.

    Si è una bassa priorità. Prima metto lo script che rende le img responsive, la home, il logo che si sposta… sta già segnato anche sul reame di github… ma da fare at refinement time, later...

- [ ] footer: maybe binocle logo as favicon instead of ↺

- [x] home instagram, feed da @studiobinocle con #pictureoftheday sorted by mostliked.

## BUGS?!



- [ ] Sono sulla home (http://binocle.junglestar.org/) clicco BINOCLE e le due scritte ‘BINOCLE’ e ‘WORKS’ si spostano leggermente sulla sinistra… succede anche a te? Cliccando su ‘WORKS’ invece rimane bello fermo come dev’essere…
