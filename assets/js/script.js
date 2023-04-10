/**
* Объект данных 
*/

const bitumData = {
    'groupName': 'Бітум',
    'logotype': '/',
    'navigation': [
         {'title': 'Головна', 'link': 'index.html'},
         {'title': 'Про Нас', 'link': 'about-us.html'},
         {'title': 'Галерея', 'link': 'gallery.html'},
         {'title': 'Музика', 'link': 'music.html'},
         {'title': 'Блог', 'link': 'blog.html'},
         {'title': 'Контакти', 'link': 'contacts.html'},
    ],
    'headerImgLink': 'https://bitum.pp.ua/assets/img/bitum.jpg',   
    'aboutUs': {
              'title': 'Про Нас',
              'description': 'Це історія про реп гурт Бітум з міста Олександрія,  який було засновано у 2003 році...',
    },
    'groupIdentity': [
       {   
           'name': 'Ruslan', 
           'linkImg': '/ruslan.webp', 
           'socialLink': {
                    'facebook': 'facebook',
                    'vk': 'vk',
                    'telegram': 'tg'
            }
       },
       {
           'name': 'Dima', 
           'linkImg': '/dima.webp', 
           'socialLink': {
                    'facebook': 'facebook',
                    'twitter': 'twitter',
                    'telegram': 'tg'
            }
       },
       {
            'name': 'Vlad', 
            'linkImg': '/vlad.webp',
            'socialLink': {
                    'facebook': 'facebook',
                    'telegram': 'tg'
            }
       }       
    ],
    'galleryImg': [
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
        {'title': 'title', 'linkPhoto': '/photo webp'},
    ],
    'musicList': [
        {'trackName': 'Track Name', 'trackLink': '/music.mp3'},
        {'trackName': 'Track Name', 'trackLink': '/music.mp3'},
        {'trackName': 'Track Name', 'trackLink': '/music.mp3'},
    ],
    'contacts': {
         'city': 'Олександрія',
         'maps-link': 'google-maps...',
    },
    'blog': [
        /* *** */
    ]   
};

/**
* Заполнение данными 
*/

const docTitle = document.title;
docTitle.innerHTML = bitumData.groupName;

const headerTitle = document.getElementById('title');
headerTitle.innerHTML = bitumData.groupName;

const blockImg = document.querySelector('.img-header');
const img = new Image();
img.src = bitumData.headerSlider.imgLink;
img.alt = bitumData.groupName;
img.src = bitumData.headerImgLink;
blockImg.append(img);

const aboutUs = document.getElementById('aboutUs');
aboutUs.innerHTML =  `<h2 class='about-title'>${bitumData.aboutUs.title}</h2>`;
aboutUs.innerHTML += `<p class='about-desc'>${bitumData.aboutUs.description}</p>`;
aboutUs.innerHTML += `<a href='${bitumData.navigation.link}'><button class='about-btn'>Читати більше</button></a>`;

const fullYear = document.getElementById('fullYear');
let date = new Date();
const year = date.getFullYear();
fullYear.append(year);

const footerLogo = document.getElementById('footerLogo');
footerLogo.innerHTML = bitumData.groupName;
