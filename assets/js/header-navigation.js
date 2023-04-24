'use strict';

const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
    header.classList.toggle(
        "is-sticky",
        window.scrollY > headerTop + header.offsetHeight
    );
});

// Burger Menu
const burgerMenu = document.querySelector('#burgerMenu');
const nav = document.querySelector('.nav');
burgerMenu.addEventListener('click', menuShow);

function menuShow() {
    nav.classList.toggle('menu-show');
    burgerMenu.classList.toggle('menu-show');
}

// Header Navigation
async function renderBitumHeaderNavigation() {
    const bitum = await getBitum();

    const logo = document.querySelector('.logo');
    //logo.innerHTML = `<h1>${bitum.groupName}</h1>`; 
    //logo.innerHTML += `<a href="https://bitum.pp.ua"><img src='./assets/img/ukraine-flag.png' alt='Ukraine' class='flag-Ukraine'></a>`;
    logo.innerHTML  = `<a href="https://bitum.pp.ua"><img src='./assets/img/new-bitum-logotype.png' alt='Бітум' class='img-logotype'></a>`;
    logo.innerHTML += `<div style='font-size:12px; position: relative;'>
                            <span style='position:absolute; top:-10px; left: 20px; color: black; font-weight: bold;'>творче об\'єднання</span>
                       </div>`;

    const navList = document.querySelector('#navList');
    navList.innerHTML  =   `<li><a id='titleHome' href='${bitum.navigation.home.linkHome}'>${bitum.navigation.home.titleHome}</a></li>
                            <li><a id='titleAboutUs' href='${bitum.navigation.aboutUs.linkAboutUs}'>${bitum.navigation.aboutUs.titleAboutUs}</a></li>
                            <li><a id='titleMusic' href='${bitum.navigation.music.linkMusic}'>${bitum.navigation.music.titleMusic}</a></li>
                            <li><a id='titleGallery' href='${bitum.navigation.gallery.linkGallery}'>${bitum.navigation.gallery.titleGallery}</a></li>
                            <li><a id='titleArchive' href='${bitum.navigation.archive.linkArchive}'>${bitum.navigation.archive.titleArchive}</a></li>
                            <li><a id='titleContacts' href='${bitum.navigation.contacts.linkContacts}'>${bitum.navigation.contacts.titleContacts}</a></li>`;
    
    /*
    let html = '';
    bitum.navigationMenu.forEach(nav => {
        let htmlSegment = `<li><a href='${nav.link}'>${nav.title}</a></li>`;
        html += htmlSegment;
    });
    navList.innerHTML = html;
    */
}

renderBitumHeaderNavigation();


