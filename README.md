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

    bundle install

Run Jekyll:

    bundle exec Jekyll serve

## 2DOs:

- [ ] gulp image processing

- [ ] responsive images

- [ ] invece dell'azzurro quando schiacci testo link su mobile..
