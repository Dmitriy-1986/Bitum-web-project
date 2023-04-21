'use strict';

async function renderBitumArchive() {
    const bitum = await getBitum();

    document.title = `${bitum.groupName} | ${bitum.navigationMenu[4].title}`;

    const breadcrumbArchive = document.querySelector('#breadcrumbArchive');
    breadcrumbArchive.innerHTML = `<ol class="breadcrumb">
                                       <li class="breadcrumb-item"><a href="${bitum.navigation.home.linkHome}">${bitum.navigation.home.titleHome} </a></li>
                                       <li class="breadcrumb-item active">${bitum.navigation.archive.titleArchive}</li>
                                   </ol>`;
    
    const titleArchive = document.querySelector('#titleArchive');
    titleArchive.innerHTML = bitum.navigation.archive.titleArchive;

    const archiveContent = document.querySelector('#archiveContent');
    archiveContent.innerHTML = 'Розділ - "Архів" в процесі розробки, очікуйте інформацію за весь період творчості...';

}

renderBitumArchive();
