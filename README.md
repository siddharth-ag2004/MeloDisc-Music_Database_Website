[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uO3FBJhb)
The website can be opened from any html page, however opening from index.html takes you to the Home Page.
Each webpage always has the option to go to Home page, Artists Page and About Page by using the navigation bar.
At the bottom of each webpage there is a footer containing link to About page.
Apart from that, some webpages might have even more clickable images and links that may direct the user to the different webpages. These webpages include:
1.Home page: This page contains 6 more clickable images, 3 of which lead to the respective album page for the top artist clicked. Other 3 images direct the user to the respective songs page for the album whose image has been clicked.
2.Artists page: This page contains 5 more clickable images. When pressed, website directs the user to the album page of the respective artist whose image has been clicked.
3.Albums page: This page contains 5 more clickable images. When pressed, the website directs the user to the songs page for the album whose image has been pressed.

The Songs pages and About Us page have no extra clickable images or links.

The website further informs the user on which page they currently are, with the help of the navigation bar, which may highlight either Home, Artists or About Us.
If the user is currently on a songs page or albums page, no highlighting is present.


The file structure is as follows:

```
.
├── ASSUMPTIONS.md
├── README.md
└── src
    ├── about_bg1.png
    ├── about_bg2.png
    ├── about_bg3.png
    ├── about_bg4.png
    ├── about.css
    ├── about.html
    ├── album_01.html
    ├── album_02.html
    ├── album_03.html
    ├── album_04.html
    ├── album_05.html
    ├── album.css
    ├── artist.css
    ├── artist.html
    ├── artist.webp
    ├── bg1.avif
    ├── bg1.jgp
    ├── bg2.avif
    ├── bg2.jpg
    ├── bg3.avif
    ├── bg3.jpg
    ├── bg4.avif
    ├── bg4.jpeg
    ├── bg4.jpg
    ├── bg5.avif
    ├── bg5.jpeg
    ├── bg6.jpeg
    ├── bg7.jpeg
    ├── bg8.jpeg
    ├── bghead.jpeg
    ├── bgwave2.jpg
    ├── bgwave3.jpg
    ├── bgwave4.png
    ├── bgwave.jpg
    ├── blur1.png
    ├── blur.png
    ├── cc2.png
    ├── curtaincall2.png
    ├── disc2.png
    ├── disc3.png
    ├── disc.png
    ├── em2.jpg
    ├── em3.jpg
    ├── em4.jpeg
    ├── em4.jpg
    ├── em5.jpg
    ├── em6.jpg
    ├── em7.jpg
    ├── em7.png
    ├── em8.png
    ├── em.jpeg
    ├── emshow3.jpg
    ├── emshowcover2.png
    ├── emshowcover.png
    ├── em_ta1.jpg
    ├── em_ta1.png
    ├── em_tp1.jpg
    ├── em.webp
    ├── encoreblur.png
    ├── encore.png
    ├── index.css
    ├── index.html
    ├── kamblur.png
    ├── kamikaze.png
    ├── logo3.jpg
    ├── logo.jpg
    ├── logo.png
    ├── mj1.jpg
    ├── mj_album1blur.jpg
    ├── mj_album1.jpg
    ├── mj_album2blur.jpg
    ├── mj_album2.jpg
    ├── mj_album3blur.jpg
    ├── mj_album3.jpg
    ├── mj_album4blur.jpg
    ├── mj_album4.jpg
    ├── mj_album5blur.jpg
    ├── mj_album5.png
    ├── mj_bg.jpg
    ├── mj_tp1.jpg
    ├── mmlpblur.png
    ├── mmlp.png
    ├── mtbmbblur.png
    ├── mtbmb.png
    ├── nu1.jpg
    ├── nu_album1blur.jpg
    ├── nu_album1.jpg
    ├── nu_album2blur.jpg
    ├── nu_album2.jpg
    ├── nu_album3blur.jpg
    ├── nu_album3.jpg
    ├── nu_album4blur.jpg
    ├── nu_album4.jpg
    ├── nu_album5blur.jpg
    ├── nu_album5.jpg
    ├── nu_bg2.png
    ├── nu_bg.png
    ├── nucleya.png
    ├── nucleya.webp
    ├── nu_ta3.jpg
    ├── nu_ta3.png
    ├── nu_tp1.jpg
    ├── pic1.jpg
    ├── pic2.jpg
    ├── pic3.webp
    ├── pic4.png
    ├── pro1.jpeg
    ├── sid1.png
    ├── song_01_01.html
    ├── song_01_02.html
    ├── song_01_03.html
    ├── song_01_04.html
    ├── song_01_05.html
    ├── song_02_01.html
    ├── song_02_02.html
    ├── song_02_03.html
    ├── song_02_04.html
    ├── song_02_05.html
    ├── song_03_01.html
    ├── song_03_02.html
    ├── song_03_03.html
    ├── song_03_04.html
    ├── song_03_05.html
    ├── song_04_01.html
    ├── song_04_02.html
    ├── song_04_03.html
    ├── song_04_04.html
    ├── song_04_05.html
    ├── song_05_01.html
    ├── song_05_02.html
    ├── song_05_03.html
    ├── song_05_04.html
    ├── song_05_05.html
    ├── songbackground1.jpg
    ├── songbackground2.jpg
    ├── song.css
    ├── sujal2.jpg
    ├── sujal.jpg
    ├── sujal.png
    ├── ts1.jpg
    ├── ts1.webp
    ├── ts2.jpeg
    ├── ts2.png
    ├── ts3.jpg
    ├── ts_album1blur.jpg
    ├── ts_album1.jpg
    ├── ts_album2blur.jpg
    ├── ts_album2.jpg
    ├── ts_album3blur.jpg
    ├── ts_album3.jpg
    ├── ts_album4blur.jpg
    ├── ts_album4.webp
    ├── ts_album5blur.jpg
    ├── ts_album5.jpg
    ├── ts_bg1.jpg
    ├── ts_bg2.jpg
    ├── ts.png
    ├── ts_ta2.jpg
    ├── ts_ta2.png
    ├── ts_tp1.jpg
    ├── xyz.jpeg
    ├── yy1.jpg
    ├── yy1.png
    ├── yy2.png
    ├── yy3.png
    ├── yy4.png
    ├── yy5.png
    ├── yy_album1blur.jpg
    ├── yy_album1.jpg
    ├── yy_album2blur.jpg
    ├── yy_album2.jpg
    ├── yy_album3blur.jpg
    ├── yy_album3.jpg
    ├── yy_album4blur.jpg
    ├── yy_album4.png
    ├── yy_album5blur.jpg
    ├── yy_album5.jpg
    ├── yy_bg1.jpg
    ├── yy_bg2.png
    ├── yy_bg3.png
    ├── yy_bg4.png
    ├── yy_tp1.jpg
    └── yy_tp2.jpg
```
