'use strict';

async function renderBitumAboutUs() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[1].title}`;

    // About Us
    const breadcrumbAboutUs = document.querySelector('#breadcrumbAboutUs');
    breadcrumbAboutUs.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">${bitum.navigation.home.titleHome} </a></li>
                                       <li class="breadcrumb-item active">${bitum.navigation.aboutUs.titleAboutUs}</li>
                                   </ol>`;
    
    const titleMainAboutUs = document.querySelector('#titleMainAboutUs');
    titleMainAboutUs.innerHTML = `<h2>${bitum.aboutUs.title}</h2>`;
    
    const aboutUsContent = document.querySelector('#aboutUsContent');
    aboutUsContent.innerHTML = `<p class="alert-content">
                                Історія Бітума зараз в процесі розробки...
                                </p>`;
 
}

renderBitumAboutUs();
