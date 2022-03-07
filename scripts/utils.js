const goods = [
  {
    name: "Футболка Сердце",
    path:"images/shirts.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Высококлассная шелкография',
  },
  {
    name: "худи Сердце",
    path: "images/hoodie.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Вытравная шелкография',
  }, 
  {
    name: "Футболка Ярослав",
    path: "images/yaroslav_t-shirt.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Высококлассная шелкография',
  },
  {
    name: "Футболка Сердце",
    path:"images/shirts.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Высококлассная шелкография',
  },
  {
    name: "худи Сердце",
    path: "images/hoodie.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Вытравная шелкография',
  }, 
  {
    name: "Футболка Ярослав",
    path: "images/yaroslav_t-shirt.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Высококлассная шелкография',
  },
  {
    name: "Футболка Сердце",
    path:"images/shirts.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Высококлассная шелкография',
  },
  {
    name: "худи Сердце",
    path: "images/hoodie.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Вытравная шелкография',
  }, 
  {
    name: "Футболка Ярослав",
    path: "images/yaroslav_t-shirt.png",
    inStock: true,
    size: {
      XS: 4,
      S: 1,
      M: 3,
      L: 0,
      XL: 2
    },
    material: '100% хлопок',
    printMode: 'Высококлассная шелкография',
  },
];

//selectors
const mainContent = document.querySelector('.content');
const landingButton = document.querySelector('.main__button');
const goodsSection = document.querySelector('.goods');
const goodsSectionContainer = goodsSection.querySelector('.container');
const goodsWrapper = goodsSection.querySelector('.goods__wrapper');
const interludeSection = document.querySelector('.interlude');
const interludeHeadline = interludeSection.querySelector('.interlude__headline');
const popups = Array.from(document.querySelectorAll('.popup'));
const goodPopupSection = document.querySelector('.popup_good');
const goodPopupSelect = goodPopupSection.querySelector('.popup__size-select');
const spanQuantity = goodPopupSection.querySelector('.popup__size-quantity');
const spanQuantityLeft = goodPopupSection.querySelector('.popup__size-quantity-stock');
const goodPopupOrderButton = goodPopupSection.querySelector('.popup__order-button');

//variables
const goodsCards = [];
let goodElement;
// let sizeOfGood;

//templates
const goodTemplate = document.querySelector('#good');
const optionTemplate = document.querySelector('#option');

//functions
function generateFromTemplate(template, selector) {
  return template.content.cloneNode(true).querySelector(selector);
}

function tiltCard(evt) {
  const cardWidth = Math.ceil(this.getBoundingClientRect().width);
  const cardOffsetLeft = Math.ceil(this.getBoundingClientRect().x);
  const cardOffsetTop = Math.ceil(this.getBoundingClientRect().y);
  const cardHeight = Math.ceil(this.getBoundingClientRect().height);
  
  const coordinateX = evt.pageX - cardOffsetLeft - cardWidth/2;
  const coordinateY = evt.pageY - window.scrollY - cardOffsetTop - cardHeight/2;

  this.style.transform = `perspective(500px) rotateX(${coordinateY/15}deg) rotateY(${coordinateX/20}deg)`;
}

function cancelTiltCard() {
  this.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
  this.style.transition = `transform 0.245s ease-in-out`;
  setTimeout(() => {
    this.style.transition = 'none';
  }, 250);
}

//observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      interludeHeadline.classList.add('interlude__headline_intersected');
      interludeSection.style.setProperty('--animation-name', 'glow');
    }
  });
}, {
  // threshold: 1,
  rootMargin: "0px 0px -50% 0px",
});

//goods observer
const goodsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    goodsCards.forEach((goodsCard) => {
      if(entry.isIntersecting) {
        goodsCard.addEventListener('mousemove', tiltCard);
        goodsCard.addEventListener('mouseleave', cancelTiltCard);
      } else {
        goodsCard.removeEventListener('mousemove', tiltCard);
      }
    });
  })
}, {
  rootMargin: "0px 0px -95% 0px",
})

