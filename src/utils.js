const mainSection = document.querySelector('.main');
const imagesOnMainPage = Array.from((mainSection.querySelectorAll('.main__image')));
const mainButton = mainSection.querySelector('.main__button');
const goodsSection = document.querySelector('.goods');
const mainAnchor = mainSection.querySelector('.main__button-anchor');
//functions
function generateFromTemplate(template, selector) {
  return template.content.cloneNode(true).querySelector(selector);
}



module.exports = {
  mainSection,
  imagesOnMainPage,
  mainButton,
  goodsSection,
  generateFromTemplate,
  mainAnchor,
}