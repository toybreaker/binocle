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


## Editing Guide:

**New work project?**  
Add a new line [in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv)

**Update contact infos, tel?**     
Change [lines 11>15 in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_config.yml)

**Profile fine tuning?**    
Edit [this file](https://github.com/toybreaker/binocle/blob/gh-pages/_includes/editables/profile.md)


## dev

Install deps:

    npm install --save imager.js

    bundle install

Run Jekyll:

    bundle exec Jekyll serve


#### frontend features
  - no jquery yet...
  - [RWD](https://en.wikipedia.org/wiki/Responsive_web_design) with [Imager.js](https://github.com/BBC-News/Imager.js/) to handle images

#### setup
  - `npm install` setup dependencies
  - `npm install imagemin-pngquant` to work images

#### dev features
  - `gulp` task to compile sass and enable browsersync
  - `gulp images` task to produce sized copies




## 2DOs:

- [ ] gulp image processing

- [ ] responsive images

- [ ] invece dell'azzurro (:focus outline) quando schiacci testo link su mobile
