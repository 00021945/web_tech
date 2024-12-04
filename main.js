// Select buttons and navigation menu
const openNavBtn = document.getElementById("openNav");
const closeNavBtn = document.getElementById("closeNav");
const navMenu = document.getElementById("navMenu");
const partnersList = document.getElementById("partnersList");
const newsList = document.getElementById("newsList");

function openNav() {
  navMenu.classList.add("site-header__nav-container--open");
}

function closeNav() {
  navMenu.classList.remove("site-header__nav-container--open");
}
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);


const partners = [
  { src: "src/img/tesla-logo.png", alt: "tesla" },
  { src: "src/img/google-logo.png", alt: "google" },
  { src: "src/img/hp-logo.png", alt: "hp" },
  { src: "src/img/oracle-logo.png", alt: "oracle" },
  { src: "src/img/microsoft-logo.png", alt: "microsoft" },
  { src: "src/img/nvida-log.png", alt: "nvidia" }
];

const news = [
  {
    title: "Каждый пользователь может выиграть iPhone 15 Pro!",
    description: "Внезапно, реплицированные с зарубежных источников, современные исследования неоднозначны и будут ограничены...",
    src: "https://cdn.payme.uz/blog/images/ru/akciya-identifikaciya/ru_01.png",
    alt: "news item",
    link: "https://blog.payme.uz/akciya-identifikaciya"
  },
  {
    title: "Каждый пользователь может выиграть iPhone15 Pro!",
    description: "С 20 апреля у вас есть шанс выиграть iPhone 15 Pro, промокоды от партнеров и множество денежных призов!",
    src: "https://cdn.payme.uz/blog/images/ru/shaq-shaq/01_ru.jpg",
    alt: "news item",
    link: "https://blog.payme.uz/shaq-shaq"
  },
  {
    title: "Чей это автомобиль? Может, ваш! Выиграйте автомобиль мечты с Payme!",
    description: "C 4 апреля каждый пользователь приложения имеет возможность выиграть главный приз",
    src: "https://cdn.payme.uz/blog/images/ru/avtomobil-mechty/ru_01.jpg",
    alt: "news item",
    link: "https://blog.payme.uz/avtomobil-mechty"
  },
  {
    title: "Payme Salom - выиграйте денежный приз с первым переводом или платежом!",
    description: "Отличные новости для новых пользователей – акция Payme Salom наполнена сюрпризами! 26 февраля с 15:30",
    src: "https://cdn.payme.uz/blog/images/ru/salom/01.png",
    alt: "news item",
    link: "https://blog.payme.uz/salom"
  },
]


// Function to render the partner list
function renderPartners(partners) {
  const partnerTemplate = document.getElementById("partnerTemplate");

  if (partnerTemplate) {
    partners.forEach(partner => {
      const clone = partnerTemplate.content.cloneNode(true);
      const img = clone.querySelector("img");
      img.src = partner.src;
      img.alt = partner.alt;
      partnersList.appendChild(clone);
    });

  }
}


// Function to render the news list
function renderNews(news) {
  const newsTemplate = document.getElementById("newsTemplate");
  
  if (newsTemplate) {
    news.forEach(newsItem => {
      const clone = newsTemplate.content.cloneNode(true);
      const link = clone.querySelector("a");
      const title = clone.querySelector(".news__item-title");
      const description = clone.querySelector(".news__item-description");
      const img = clone.querySelector("img");
      
      link.href = newsItem.link;
      title.textContent = newsItem.title;
      description.textContent = newsItem.description;
      img.src = newsItem.src;
      img.alt = newsItem.alt;
      newsList.appendChild(clone);
    });
  }
}

renderPartners(partners);
renderNews(news);


