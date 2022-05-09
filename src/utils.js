const mainSection = document.querySelector('.main');
const mainContainer = mainSection.querySelector('.container');
const mainHeadline = mainSection.querySelector('.main__headline');
const imagesOnMainPage = Array.from((mainSection.querySelectorAll('.main__image')));
const mainButton = mainSection.querySelector('.main__button');
const goodsSection = document.querySelector('.goods');
const mainAnchor = mainSection.querySelector('.main__button-anchor');

//templates
const goodTemplate = document.querySelector('#good');

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
  mainContainer,
  mainHeadline,
  goodTemplate,
}