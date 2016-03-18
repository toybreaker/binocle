binocle
---

## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first by contacting us: info@junglestar.org  
All photos © Binocle. All rights reserved.  
Thanks, Junglestar team  

## Features:
- standalone webapp (after "add to home screen" on android)
- csv driven menu
- plain javascript
- address use [microformat](https://schema.org/Organization)
- work intro use markdown inside {{content}}


## Editing Guide:

**New work project?**  
Add a new line [in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_data/works.csv)

**Update contact infos, tel?**     
Change [lines 11>15 in this file](https://github.com/toybreaker/binocle/blob/gh-pages/_config.yml)

**Profile fine tuning?**    
Edit [this file](https://github.com/toybreaker/binocle/blob/gh-pages/_includes/editables/profile.md)


## dev

Install deps:

    bundle install

Run Jekyll:

    bundle exec Jekyll serve

## 2DOs:

- [ ] La discussione [qui](https://github.com/stevenschobert/instafeed.js/issues/345) lascia poco speranze di usare instafeed e di procedere con il progetto cosi come è fatto al momento. 'azz..

- [ ] Si potrebbe usare [IFTTT](https://ifttt.com/instagram) in modo che ogni instagram post un worker copia il tutto su:

  - binocle [github](https://ifttt.com/github).  
  - binocle [drive](https://ifttt.com/connect/instagram/google_drive)


  Vantaggi:

  + crea archivio storico   
  + mantiene semplicità nel workflow

  Svantaggi:

  - perdita dell' ordinamento in base ai likes del pubblico    
  - semplicità nel sistema

- [ ] riesci a prendere img manualmente usando instagram image ID?! tipo [questa](https://scontent-mxp1-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/12724746_1761798947381200_470383680_n.jpg)  o [questa](https://scontent-mxp1-1.cdninstagram.com/t51.2885-15/e35/11261917_562258193942516_1108019599_n.jpg) o [questa](https://scontent-mxp1-1.cdninstagram.com/t51.2885-15/e35/p480x480/12531002_1684039925167816_1667080319_n.jpg) di bastardstore

- [ ] cerca middle-man service per succhiare oltre 20 foto.

- [x] ricaricare tutte le immagini uploadate prima 2016 (in progress)

- [ ] invece dell'azzurro quando schiacci testo link su mobile..
