// const mainSection = document.querySelector('.main');
// const mainContainer = mainSection.querySelector('.container');
// const mainHeadline = mainSection.querySelector('.main__headline');
// const imagesOnMainPage = Array.from((mainSection.querySelectorAll('.main__image')));
// const mainButton = mainSection.querySelector('.main__button');
// const goodsSection = document.querySelector('.goods');
// const mainAnchor = mainSection.querySelector('.main__button-anchor');

const { goods } = require("./utilsGoods");

//templates
const goodTemplate = document.querySelector('#good');

//functions
function generateFromTemplate(template, selector) {
  return template.content.cloneNode(true).querySelector(selector);
}

function initPages() {
  const mainSection = document.querySelector('.main');
  const mainImages = Array.from(mainSection.querySelectorAll('.main__image'));
  const mainContainer = document.querySelector('.container_centered');
  
  const goodsContainer = document.querySelector('.container_low-width');

  if(mainContainer) {
    // const mainContainer = document.querySelector('.main__content-div');
    return mainSection.addEventListener('mousemove',(evt) => {
      mainImages.forEach((image) => {
        image.style.transform = `translateX(${(window.innerWidth - (evt.pageX*image.getAttribute('data-speed')))/300}px) translateY(${(window.innerHeight - (evt.pageY*image.getAttribute('data-speed')))/300}px)`;
      });
    });

    
    // return mainImages.forEach((image) => {
    //   console.log(image);
    // });
  }
  if(goodsContainer) {
    const goodsWrapper = document.querySelector('.goods__wrapper');

    return goods.forEach((good) => {
      const goodElementFromTemplate = generateFromTemplate(goodTemplate, '.goods__good');
      goodElementFromTemplate.querySelector('.goods__good-img').src = good.path;
      goodElementFromTemplate.querySelector('.goods__good-span').textContent = good.name;
      goodElementFromTemplate.querySelector('.goods__good-quantity').textContent = good.inStock ? "Есть в наличии" : "Нет в наличии";
      goodsWrapper.append(goodElementFromTemplate);
    });

  }
}

module.exports = {
  // mainSection,
  // imagesOnMainPage,
  // mainButton,
  // goodsSection,
  generateFromTemplate,
  // mainAnchor,
  // mainContainer,
  // mainHeadline,
  // goodTemplate,
  initPages,
}