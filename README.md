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

- [image]((http://binocle.junglestar.org/assets/p/gardenshe-01-1920.jpg) )

- [ ] responsive images

- [ ] invece dell'azzurro (:focus outline) quando schiacci testo link su mobile


## bugs

processing tifs with [imagemagick](http://www.imagemagick.org/script/convert.php)

```
convert *.tif output.jpg
```

```
convert *.tif output.jpg
```


trows errors, try:

- adobe is [homefucked](https://forums.adobe.com/thread/1900216?start=0&tstart=0), [deutchfucked](https://forums.adobe.com/message/7732728#7732728)

- google this: [RichTIFFIPTC problem ](https://www.google.it/search?q=problem+RichTIFFIPTC&oq=problem+RichTIFFIPTC)

- Re: Error: wrong data type 7 for "RichTIFFIPTC";
  tag ignored.  
  Postby magick »\ 2009-10-02T16:32:49-07:00

 [This exception is thrown by the libTIFF. It apparently does not like the layout of your IPTC profile. Your best path forward would be to post this problem to the libTIFF bug list.](https://www.imagemagick.org/discourse-server/viewtopic.php?t=12872)

- [ongoing Windows incompatibility](http://comments.gmane.org/gmane.comp.video.tiff/6355)
