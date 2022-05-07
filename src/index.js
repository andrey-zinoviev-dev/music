//import css
import './style/index.css';

//other imports
import { mainSection, imagesOnMainPage, generateFromTemplate, mainButton, mainAnchor } from './utils';
import { goods } from "./utilsGoods"; 

//initiate Swup
// import Swup from 'swup';

// const swup = new Swup();

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
  // console.log(goodsHtml.querySelector('.goods'));
});

//prevent default anchor behavior
mainAnchor.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log('link clicked');
})

//testing query of element from other html file
document.addEventListener('swup:contentReplaced', (evt) => {
  const mainSection = document.querySelector('.main');
  
  const goodsSection = document.querySelector('.goods');

  if(mainSection) {
    const imagesOnMainPage = Array.from(mainSection.querySelectorAll('.main__image'));
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
    return;
  }
  if(goodsSection) {
   
    const goodsWrapper = goodsSection.querySelector('.goods__wrapper');
    const goodTemplate = document.querySelector('#good');
    //create and append goods elements in wrapper
    goods.forEach((good) => {
        const goodElementFromTemplate = generateFromTemplate(goodTemplate, '.goods__good');
        goodElementFromTemplate.querySelector('.goods__good-img').src = good.path;
        goodElementFromTemplate.querySelector('.goods__good-span').textContent = good.name;
        goodElementFromTemplate.querySelector('.goods__good-quantity').textContent = good.inStock ? "Есть в наличии" : "Нет в наличии";
    
        // goodElementFromTemplate.addEventListener('click', () => {
            
        //     goodElement = good;
        //     Array.from(sizeList.children).forEach((child) => {
        //         sizeList.removeChild(child);
        //     });
            
        //     spanQuantity.textContent = '';
        //     spanQuantityLeft.textContent = '';
        //     goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
        //     goodPopupQuantityInput.value = 1;
    
        //     goodPopupSection.querySelector('.popup__headline').textContent = good.name;
        //     goodPopupSection.querySelector('.popup__image').src = good.path;
    
        //     Object.keys(good.size).forEach((sizeOfCloth) => {
        //         const sizeFromTemplate = generateFromTemplate(sizeTemplate, '.popup__size-list-element');
        //         const sizeInput = sizeFromTemplate.querySelector('.popup__size-list-element-input');
        //         sizeInput.id = sizeOfCloth;
        //         sizeInput.value = sizeOfCloth;
        //         const sizeLabel = sizeFromTemplate.querySelector('.popup__size-list-element-label');
        //         sizeLabel.attributes.for.nodeValue = sizeOfCloth;
        //         sizeLabel.textContent = sizeOfCloth;
        //         if(good.size[sizeOfCloth] <= 0) {
        //             // console.log(sizeFromTemplate);
        //             sizeFromTemplate.classList.add('popup__size-list-element_disabled');
        //             goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
        //             // return;
        //             goodPopupOrderButton.classList.add('popup__order-button_disabled');
        //             goodPopupOrderButton.disabled = true;
        //         }
        //         sizeLabel.addEventListener('click', (evt) => {
        //             Array.from(goodPopupForm.querySelectorAll('.popup__size-list-element')).forEach((input) => {
        //                 input.classList.remove('popup__size-list-element_active');
        //             });
                    
        //             sizeFromTemplate.classList.add('popup__size-list-element_active');
    
        //             Array.from(goodPopupForm.querySelectorAll('.popup__size-list-element-input')).forEach((input) => {
        //                 input.classList.remove('data-to-send');
        //             });
    
        //             sizeInput.classList.add('data-to-send');
    
        //             spanQuantity.textContent = 'Осталось ';
        //             spanQuantityLeft.textContent = good.size[sizeLabel.textContent];
        //             goodPopupQuantityWrapper.classList.add('popup__size-form-quantity-wrapper_active');
        //             goodPopupOrderButton.classList.remove('popup__order-button_disabled');
        //             goodPopupOrderButton.disabled = false;
        //             //необходимо для изменения инпута количества одежды
        //             sizeLabelSelected = evt.target;
        //         });
        //         sizeList.append(sizeFromTemplate);
        //         // const optionFromTemplate = generateFromTemplate(optionTemplate, '.popup__size-select-option');
        //         // optionFromTemplate.value = sizeOfCloth;
        //         // optionFromTemplate.textContent = sizeOfCloth;
        //         // goodPopupSelect.append(optionFromTemplate);
        //     });
    
        //     goodPopupSection.querySelector('.popup__span-good-material').textContent = good.material;
        //     goodPopupSection.querySelector('.popup__span-good-print').textContent = good.printMode;
    
        //     goodPopupSection.classList.add('popup_opened');
        // });
    
        goodsWrapper.append(goodElementFromTemplate);
    
        // goodsCards.push(goodElementFromTemplate);
    });
    return console.log(goodsSection);
  }
});
// mainButton.addEventListener('click', () => {});
