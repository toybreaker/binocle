[![Netlify Status](https://api.netlify.com/api/v1/badges/7ed81ca4-5f64-40a4-8cc4-e8af135648a8/deploy-status)](https://app.netlify.com/sites/binocle/deploys)

[binocle.it](https://binocle.it)
---

## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them. Please, ask for permission first, by contacting us: info@junglestar.org
All photos © Binocle. All rights reserved.
Thanks, Junglestar team

## Features:

- [X] progressive image in home using picture and ".avif" w/ jpg fallback.
- [X] standalone web-app (after "add to home screen" on android).
- [X] CSV driven menu.
- [X] plain javascript.
- [X] address use [microformat](https://schema.org/Organization). [See test](https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Fbinocle.it%2F)
- [X] work intros use markdown inside {{content}}.
- [X] FULL HD - up to 1920px wide shots.
- [X] open-graph & twitter-cards.
- [X] SSL/https thanks to netlify.

## No frills editing guide:

**Set homepage photo**

Mail the chosen photo named ```picture-of-the-day```. Min width 1800px (webmaster will make the image set!)

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

## 2DOs:

- [ ] refactor to use .avif
- [ ] setup service workers for full Offline experience.
