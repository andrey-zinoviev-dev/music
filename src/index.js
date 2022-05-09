//import css
import './style/index.css';

//import barba
import Barba from '@barba/core';

//other imports
import { mainSection, imagesOnMainPage, generateFromTemplate, mainButton, mainAnchor, mainContainer, mainHeadline, goodTemplate } from './utils';

import { goods } from "./utilsGoods"; 
// console.log(Barba);
// Barba.init({
//   transitions: [
//     {
//       name: 'goodsPage',
//       to: {
//         namespace: ['goods']
//       },
//       enter() {
//         console.log(document.querySelector('.goods__wrapper'));
//       }
//     }
//   ],
// });


if(imagesOnMainPage) {
  mainSection.addEventListener('mousemove', (evt) => {
    imagesOnMainPage.forEach((image) => {
      // image.style.transition = `transform 0.25s ease-in-out`;
      image.style.transform = `translateX(${(window.innerWidth - (evt.pageX*image.getAttribute('data-speed')))/300}px) translateY(${(window.innerHeight - (evt.pageY*image.getAttribute('data-speed')))/300}px)`;
      // setTimeout(() => {
      //   // image.style.transition = ``;
        
      // }, 250);
    });
    
  });
  
  mainSection.addEventListener('mouseleave', (evt) => {
    imagesOnMainPage.forEach((image) => {
      image.style.transition = `transform 0.25s ease-in-out`;
      image.style.transform = `translateX(0px) translateY(0px)`;
      setTimeout(() => {
        image.style.transition = ``;
      }, 250);
    });
  
  });
}

//load htmls
let mainHtml;
let goodsHtml;

//initializing DOM Parser
const parser = new DOMParser();

fetch('index.html')
.then((res) => {
  return res.text();
})
.then((page) => {
  mainHtml = parser.parseFromString(page, 'text/html');
  // console.log(mainHtml.querySelector('.main'));
})

fetch('goods.html')
.then((res) => {
  return res.text();
})
.then((page) => {
  goodsHtml = parser.parseFromString(page, 'text/html');
  const goodsWrapper = goodsHtml.querySelector('.goods__wrapper');
  goods.forEach((good) => {
    const goodElementFromTemplate = generateFromTemplate(goodTemplate, '.goods__good');
    goodElementFromTemplate.querySelector('.goods__good-img').src = good.path;
    goodElementFromTemplate.querySelector('.goods__good-span').textContent = good.name;
    goodElementFromTemplate.querySelector('.goods__good-quantity').textContent = good.inStock ? "Есть в наличии" : "Нет в наличии";
    goodsWrapper.append(goodElementFromTemplate);
  })
  // console.log(goodsHtml.querySelector('.goods'));
});

//prevent default anchor behavior
mainAnchor.addEventListener('click', (evt) => {
  evt.preventDefault();
  // console.log(mainHeadline);
  // mainHeadline.style.visibility = 'hidden';
  // mainAnchor.style.visibility = 'hidden';
  // console.log(mainContainer);
  mainSection.removeChild(mainHeadline);
  mainContainer.removeChild(mainButton);
  mainContainer.append(goodsHtml.querySelector('.goods__wrapper-text'));
  mainContainer.append(goodsHtml.querySelector('.goods__wrapper'));
})

//testing query of element from other html file
// console.log(document.querySelector('.goods__wrapper'));


