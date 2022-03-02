const goods = [
  {
    name: "Футболка Сердце",
    path:"images/shirts.png",
    quantity: 0,
  },
  {
    name: "худи Сердце",
    path: "images/hoodie.png",
    quantity: 2,
  }, 
  {
    name: "Футболка Ярослав",
    path: "images/yaroslav_t-shirt.png",
    quantity: 1,
  },
];

//selectors
const mainContent = document.querySelector('.content');
const landingButton = document.querySelector('.main__button');
const goodsSection = document.querySelector('.goods');
const goodsWrapper = goodsSection.querySelector('.goods__wrapper');
const interludeSection = document.querySelector('.interlude');
const interludeHeadline = interludeSection.querySelector('.interlude__headline');

//templates
const goodTemplate = document.querySelector('#good');

//functions
function generateFromTemplate(template, selector) {
  return template.content.cloneNode(true).querySelector(selector);
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

observer.observe(interludeSection);