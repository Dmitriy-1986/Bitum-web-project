'use strict';

const homeMain = {
     "aboutMain": {
          "title": "Про Нас",
          "subdescription": "Стислий опис історії реп гурту БІТУМ, та головних історичних подій учасників гурту з моменту заснування по нинішній час."
     },
     "musicMain": {
          "title": "Музика",
          "subdescription": "Вашій увазі музичні альбоми реп гурту БІТУМ а також музичні композиції учасників гурту різних років творчості що не були включені в офіційні альбоми."
     },
     "photoMain": {
          "title": "Фото",
          "subdescription": "Фото світлини реп гурту БІТУМ за весь час творчості, фото сети, гастрольні світлини й не формальні домашні фото."
     },
     "archiveMain": {
          "title": "Архів",
          "subdescription": "Архівна музика, світлини, афіші, згадки в газетах та інші архівні файли реп гурту БІТУМ за весь період творчості."
     },
     "contactMain": {
          "title": "Контакти",
          "subdescription": "Ви можете надіслати лист на зазначену адресу електронної пошти",
          "mail": "bitum2003@gmail.com"
     }
};

document.title = `Творче об'єднання Бітум | Головна`;

// About Us
const imgAboutUsBlock = document.querySelector('#imgAboutUs');
const contentAboutUs = document.querySelector('#contentAboutUs');
contentAboutUs.innerHTML = `<h2>${homeMain.aboutMain.title}</h2>`;
contentAboutUs.innerHTML += `<p class='content-about-us'>${homeMain.aboutMain.subdescription.slice(0, 200)}...</p>`;
contentAboutUs.innerHTML += `<a href='./about-us.html'><button class='btn btn-primary'>Читати більше</button></a>`;

const imgAbout = new Image();
imgAbout.alt = homeMain.aboutMain.title;
imgAbout.src = './assets/img/home-about-us.jpg';
imgAboutUsBlock.append(imgAbout);

// Archive
const archive = document.querySelector('#archive');
const contentArchive = document.querySelector('#contentArchive');
contentArchive.innerHTML = `<h2>${homeMain.archiveMain.title}</h2>`;
contentArchive.innerHTML += `<p class='content-about-us'>${homeMain.archiveMain.subdescription.slice(0, 200)}...</p>`;
contentArchive.innerHTML += `<a href='./archive.html'><button class='btn btn-primary'>Читати більше</button></a>`;

const imgArchive = new Image();
imgArchive.alt = homeMain.archiveMain.title;
imgArchive.src = './assets/img/home-archive.jpg';
archive.append(imgArchive);

// Gallery
const gallery = document.querySelector('#gallery');
const contentGallery = document.querySelector('#contentGallery');
contentGallery.innerHTML = `<h2>${homeMain.photoMain.title}</h2>`;
contentGallery.innerHTML += `<p class='content-about-us'>${homeMain.photoMain.subdescription.slice(0, 200)}...</p>`;
contentGallery.innerHTML += `<a href='./gallery.html'><button class='btn btn-primary'>Читати більше</button></a>`;

const imgGallery = new Image();
imgGallery.alt = homeMain.photoMain.title;
imgGallery.src = './assets/img/home-photo.jpg';
gallery.append(imgGallery);

// Music
const music = document.querySelector('#music');
const contentMusic = document.querySelector('#contentMusic');
contentMusic.innerHTML = `<h2>${homeMain.musicMain.title}</h2>`;
contentMusic.innerHTML += `<p class='content-about-us'>${homeMain.musicMain.subdescription.slice(0, 200)}...</p>`;
contentMusic.innerHTML += `<a href='./music.html'><button class='btn btn-primary'>Читати більше</button></a>`;

const imgMusic = new Image();
imgMusic.alt = homeMain.musicMain.title;
imgMusic.src = './assets/img/home-music.jpg';
music.append(imgMusic);

// Contacts
const contactTitle = document.querySelector('#contactTitle');
const contentContacts = document.querySelector('#contentContacts p');
const googleMaps = document.querySelector('#googleMaps');

contactTitle.innerHTML = `<h2>${homeMain.contactMain.title}</h2>`;
contentContacts.innerHTML = `<p class='content-about-us'>${homeMain.contactMain.subdescription}</p>`;
contentContacts.innerHTML += `<a href='mailto:${homeMain.contactMain.mail}'>
                                   <img src='./assets/img/icon-gmail.png' alt='Gmail' class='img-gmail'> 
                                   ${homeMain.contactMain.mail}
                              </a>`;
googleMaps.innerHTML = `<div class="maps"></div>
                         <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104008.81614515168!2d33.07541334587099!3d48.66423519437349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d09d92b326f807%3A0xe117d4fe41dc0d9!2z0J7Qu9C10LrRgdCw0L3QtNGA0ZbRjywg0JrRltGA0L7QstC-0LPRgNCw0LTRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjgwMDE!5e0!3m2!1suk!2sua!4v1681932280382!5m2!1suk!2sua" 
                                     height="350" style="border:0;" allowfullscreen="" loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>-->`;

const mainContent = document.querySelector('#mainContent');
window.addEventListener('load', () => {
     mainContent.classList.remove('main-cont-none');
     mainContent.classList.add('main-cont-block');
});

