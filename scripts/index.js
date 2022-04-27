//set cookies for cart
mainApi.loadInitialCookie()
.then((data) => {
    // console.log(JSON.parse(data.cart).length);
    if(!data.cart || JSON.parse(data.cart).length === 0) {
        
        emptyCartListElement.classList.remove('cart__list-element_hidden');
        // cartSubmitAnchor.classList.add('cart__button-submit_disabled');
        return;
    };
    cartSubmitAnchor.classList.remove('cart__button-submit_disabled');
    // console.log(JSON.parse(data.cart));
    goodsToAddToCart = JSON.parse(data.cart);
    // console.log(goodsToAddToCart);
    cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;

    goodsToAddToCart.forEach((good) => {
        const liToInsert = generateFromTemplate(liTempalte, '.cart__list-element');
        const removeLiFromListButton = liToInsert.querySelector('.cart__list-element-button-close');
        emptyCartListElement.classList.add('cart__list-element_hidden');

        removeLiFromListButton.addEventListener('click', () => {
            mainApi.deleteFromCart(good)
            .then((data) => {
                goodsToAddToCart = data;
                if(goodsToAddToCart.length <= 0) {
                    cartSubmitAnchor.classList.add('cart__button-submit_disabled');
                    emptyCartListElement.classList.remove('cart__list-element_hidden');
                };
                cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;
                cartList.removeChild(liToInsert);
            });
        });

        liToInsert.querySelector('.cart__list-element-img').src = good.pic;
        liToInsert.querySelector('.cart__list-element-name').textContent = good.name;
        liToInsert.querySelector('.cart__list-element-quantity').textContent = `Количество ${good.quantity}`;
        liToInsert.querySelector('.cart__list-element-price').textContent = `${good.price}`;
        cartList.append(liToInsert);

    });
});

const headline = document.querySelector('.main__headline');
const header = document.querySelector('.header');

document.addEventListener('scroll', (evt) => {
    if (scrollY >= 100) {
        header.classList.add('header_background-added')
    } else {
        header.classList.remove('header_background-added');
    }
    
});

//cart open
cartButton.addEventListener('click', () => {
    cartSection.classList.add('cart_opened');
});

//cart close
cartSectionCloseButton.addEventListener('click', () => {
    cartSection.classList.remove('cart_opened');
});

//scroll to goods on click
landingButton.addEventListener('click', () => {
    goodsSection.scrollIntoView({
        block: 'start',
        behavior: "smooth",
    });
});

//add close animation for popups
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close');
    const popupOverlay = popup.querySelector('.popup__overlay');

    closeButton.addEventListener('click', () => {
        popup.classList.remove('popup_opened');
    });
    popupOverlay.addEventListener('click', () => {
        popup.classList.remove('popup_opened');
    });
})

//create and append goods elements in wrapper
goods.forEach((good) => {
    const goodElementFromTemplate = generateFromTemplate(goodTemplate, '.goods__good');
    goodElementFromTemplate.querySelector('.goods__good-img').src = good.path;
    goodElementFromTemplate.querySelector('.goods__good-span').textContent = good.name;
    goodElementFromTemplate.querySelector('.goods__good-quantity').textContent = good.inStock ? "Есть в наличии" : "Нет в наличии";

    goodElementFromTemplate.addEventListener('click', () => {
        
        goodElement = good;
        Array.from(sizeList.children).forEach((child) => {
            sizeList.removeChild(child);
        });
        
        spanQuantity.textContent = '';
        spanQuantityLeft.textContent = '';
        goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
        goodPopupQuantityInput.value = 1;

        goodPopupSection.querySelector('.popup__headline').textContent = good.name;
        goodPopupSection.querySelector('.popup__image').src = good.path;

        Object.keys(good.size).forEach((sizeOfCloth) => {
            const sizeFromTemplate = generateFromTemplate(sizeTemplate, '.popup__size-list-element');
            const sizeInput = sizeFromTemplate.querySelector('.popup__size-list-element-input');
            sizeInput.id = sizeOfCloth;
            sizeInput.value = sizeOfCloth;
            const sizeLabel = sizeFromTemplate.querySelector('.popup__size-list-element-label');
            sizeLabel.attributes.for.nodeValue = sizeOfCloth;
            sizeLabel.textContent = sizeOfCloth;
            if(good.size[sizeOfCloth] <= 0) {
                // console.log(sizeFromTemplate);
                sizeFromTemplate.classList.add('popup__size-list-element_disabled');
                goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
                // return;
                goodPopupOrderButton.classList.add('popup__order-button_disabled');
                goodPopupOrderButton.disabled = true;
            }
            sizeLabel.addEventListener('click', (evt) => {
                Array.from(goodPopupForm.querySelectorAll('.popup__size-list-element')).forEach((input) => {
                    input.classList.remove('popup__size-list-element_active');
                });
                
                sizeFromTemplate.classList.add('popup__size-list-element_active');

                Array.from(goodPopupForm.querySelectorAll('.popup__size-list-element-input')).forEach((input) => {
                    input.classList.remove('data-to-send');
                });

                sizeInput.classList.add('data-to-send');

                spanQuantity.textContent = 'Осталось ';
                spanQuantityLeft.textContent = good.size[sizeLabel.textContent];
                goodPopupQuantityWrapper.classList.add('popup__size-form-quantity-wrapper_active');
                goodPopupOrderButton.classList.remove('popup__order-button_disabled');
                goodPopupOrderButton.disabled = false;
                //необходимо для изменения инпута количества одежды
                sizeLabelSelected = evt.target;
            });
            sizeList.append(sizeFromTemplate);
            // const optionFromTemplate = generateFromTemplate(optionTemplate, '.popup__size-select-option');
            // optionFromTemplate.value = sizeOfCloth;
            // optionFromTemplate.textContent = sizeOfCloth;
            // goodPopupSelect.append(optionFromTemplate);
        });

        goodPopupSection.querySelector('.popup__span-good-material').textContent = good.material;
        goodPopupSection.querySelector('.popup__span-good-print').textContent = good.printMode;

        goodPopupSection.classList.add('popup_opened');
    });

    goodsWrapper.append(goodElementFromTemplate);

    goodsCards.push(goodElementFromTemplate);
});

//cloth size choose event
goodPopupQuantityInput.addEventListener('input', (evt) => {
    
    const sizeOfGood = +showSelectValue(sizeLabelSelected, goodElement);
    
    spanQuantityLeft.textContent = sizeOfGood;

    if(sizeOfGood <= 0 || evt.target.value > sizeOfGood) {
        // spanQuantity.textContent = 'Закончилось';
        // spanQuantityLeft.textContent = '';
        // goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
        // return;
        goodPopupOrderButton.classList.add('popup__order-button_disabled');
        return goodPopupOrderButton.disabled = true;
    }

    // spanQuantity.textContent = 'Осталось ';
    goodPopupQuantityWrapper.classList.add('popup__size-form-quantity-wrapper_active');
    // return;
    goodPopupOrderButton.classList.remove('popup__order-button_disabled');
    return goodPopupOrderButton.disabled = false;

});

//cloth quantity change event
// goodPopupQuantityInput.addEventListener('input', (evt) => {
//     const clothQuantity = +evt.currentTarget.value;
    
//     if(clothQuantity <= 0 || clothQuantity > goodElement.size[goodPopupSelect.value]) {
//         goodPopupOrderButton.classList.add('popup__order-button_disabled');
//         return goodPopupOrderButton.disabled = true;
//     }
//     goodPopupOrderButton.classList.remove('popup__order-button_disabled');
//     return goodPopupOrderButton.disabled = false;
// });

//add clothes to cart event
goodPopupOrderButton.addEventListener('click', (evt) => {
    const elementsToSend = Array.from(goodPopupForm.querySelectorAll('.data-to-send'));
    // const sizeInput = goodPopupSection.querySelector('.popup__size-list-element-input');
    // console.log(sizeInput);
    evt.preventDefault();
    const objectToSend = {}; 
    // let elementInArrayFound = false;
    objectToSend.pic = goodElement.path;
    objectToSend.name = goodElement.name;
    objectToSend.price = goodElement.price;
    
    elementsToSend.forEach((element) => {
        objectToSend[element.name] = element.value;   
    });
    
    return mainApi.sendCartDetails(objectToSend)
    .then((data) => {
        cartSubmitAnchor.classList.remove('cart__button-submit_disabled');
        // console.log(data);
        // goodsToAddToCart.push(objectToSend);
        const cartContents = Array.from(cartList.children);
        cartContents.forEach((cartContent) => {
            cartList.removeChild(cartContent);
        });
        // cartContents.forEach((child) => {
        //     cartList
        // })
        goodsToAddToCart = data;

        data.forEach((good) => {
            const liToInsert = generateFromTemplate(liTempalte, '.cart__list-element');
            const removeLiFromListButton = liToInsert.querySelector('.cart__list-element-button-close');
            removeLiFromListButton.addEventListener('click', () => {
                mainApi.deleteFromCart(good)
                .then((data) => {
                    goodsToAddToCart = data; 
                    
                    if(goodsToAddToCart.length <= 0) {
                        cartSubmitAnchor.classList.add('cart__button-submit_disabled');
                        emptyCartListElement.classList.remove('cart__list-element_hidden');
                        cartList.append(emptyCartListElement);
                    };
                    cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;
                    cartList.removeChild(liToInsert);
                })
            });
    
            liToInsert.querySelector('.cart__list-element-img').src = good.pic;
            liToInsert.querySelector('.cart__list-element-name').textContent = good.name;
            liToInsert.querySelector('.cart__list-element-quantity').textContent = `Количество ${good.quantity}`;
            liToInsert.querySelector('.cart__list-element-price').textContent = `${good.price}`;
            cartList.append(liToInsert);
    
            setTimeout(() => {
                goodPopupSection.classList.remove('popup_opened');
            }, 1200);
        });
        
        cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;

        emptyCartListElement.classList.add('cart__list-element_hidden');

    //     // setTimeout(() => {
    //     //     goodPopupSection.classList.remove('popup_opened');
    //     // }, 1200);
    });

    //РАСКОММЕНТИРОВАТЬ ЧУТЬ ПОЗЖЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // goodsToAddToCart.push(objectToSend);

    // cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;

    // emptyCartListElement.classList.add('cart__list-element_hidden');
//РАСКОММЕНТИРОВАТЬ ЧУТЬ ПОЗЖЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // //main info to send to cart
    // const liToInsert = generateFromTemplate(liTempalte, '.cart__list-element');
    // const removeLiFromListButton = liToInsert.querySelector('.cart__list-element-button-close');
    // removeLiFromListButton.addEventListener('click', () => {
    //     goodsToAddToCart.pop(objectToSend);
    //     if(goodsToAddToCart.length <= 0) {
    //         emptyCartListElement.classList.remove('cart__list-element_hidden');
    //     };

    //     mainApi.deleteFromCart(good)
    //     .then((data) => {
    //         console.log(data);
    //         // goodsToAddToCart.pop(good);
    //         cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;
    //         cartList.removeChild(liToInsert);
    //         goodsToAddToCart = data; 
    //     })

    // });

    // liToInsert.querySelector('.cart__list-element-img').src = objectToSend.pic;
    // liToInsert.querySelector('.cart__list-element-name').textContent = objectToSend.name;
    // liToInsert.querySelector('.cart__list-element-quantity').textContent = `Количество ${objectToSend.quantity}`;
    // liToInsert.querySelector('.cart__list-element-price').textContent = `${objectToSend.price}`;
    // cartList.append(liToInsert);

    // setTimeout(() => {
    //     goodPopupSection.classList.remove('popup_opened');
    // }, 1200);
    // // //change cart details
    // mainApi.sendCartDetails(objectToSend)
    // .then((data) => {        
    //     // console.log(data);
    //     // if(localStorage.getItem('cart') === null) {
    //     //     return localStorage.setItem('cart', data);
    //     // }
    //     // localStorage.clear();
    //     // return localStorage.setItem('cart', JSON.stringify(data));
    //     // return goodPopupSection.classList.remove('popup_opened');
    // });
    // const elementKeys = Object.keys(objectToSend).filter((element) => {
    //     return element !== "quantity";
    // });
   
    // const elementIndexFoundInCart = goodsToAddToCart.findIndex((element) => {
    //    return elementKeys.every((key) => {
    //     return objectToSend[key] === element[key];
    //    });
    // });
    
    // if(elementIndexFoundInCart >= 0) {
    //     goodsToAddToCart[elementIndexFoundInCart].quantity = objectToSend.quantity;
    //     // return console.log(goodsToAddToCart[elementIndexFoundInCart]);

    //     return mainApi.sendCartDetails(goodsToAddToCart[elementIndexFoundInCart])
    //     .then((data) => {
    //         //переделать массив, который отправляется с сервера (добавить к уже имеющемуся количеству + то кол-во, которое отправляется на сервер)
    //         console.log(data);
    //         // goodsToAddToCart.push(objectToSend);
    //         // goodsToAddToCart = data;
    
    //         // emptyCartListElement.classList.add('cart__list-element_hidden');
    
    //         // setTimeout(() => {
    //         //     goodPopupSection.classList.remove('popup_opened');
    //         // }, 1200);
    //     });
    // }
    // const liToInsert = generateFromTemplate(liTempalte, '.cart__list-element');
    // const removeLiFromListButton = liToInsert.querySelector('.cart__list-element-button-close');
    // removeLiFromListButton.addEventListener('click', () => {
    //     // goodsToAddToCart.pop(objectToSend);
    //     if(goodsToAddToCart.length <= 0) {
    //         emptyCartListElement.classList.remove('cart__list-element_hidden');
    //     };

    //     mainApi.deleteFromCart(good)
    //     .then((data) => {
    //         cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;
    //         cartList.removeChild(liToInsert);
    //         goodsToAddToCart = data; 
    //     });
    // });

    // liToInsert.querySelector('.cart__list-element-img').src = objectToSend.pic;
    // liToInsert.querySelector('.cart__list-element-name').textContent = objectToSend.name;
    // liToInsert.querySelector('.cart__list-element-quantity').textContent = `Количество ${objectToSend.quantity}`;
    // liToInsert.querySelector('.cart__list-element-price').textContent = `${objectToSend.price}`;
    // cartList.append(liToInsert);


    // // //change cart details
    // return mainApi.sendCartDetails(objectToSend)
    // .then((data) => {
    //     // goodsToAddToCart.push(objectToSend);
    //     goodsToAddToCart = data;

    //     cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;

    //     emptyCartListElement.classList.add('cart__list-element_hidden');

    //     setTimeout(() => {
    //         goodPopupSection.classList.remove('popup_opened');
    //     }, 1200);
    // });
});

//place order event
cartSubmitAnchor.addEventListener('click',  (evt) => {
    // evt.preventDefault();
    // console.log(objectToSend);
    // mainApi.sendCartDetails(goodsToAddToCart)
    // .then((data) => {
    //     console.log(data);
    //     // localStorage.setItem('cart', data);
    // })
    // console.log('send data and open order summary page');
});

headerSandwichButton.addEventListener('click', () => {
    headerNavMenu.classList.toggle('header__menu_burger');
    headerOverlay.classList.toggle('header__overlay_visible');
});

//main section parallax
mainSection.addEventListener('mousemove', (evt) => {
    mainImages.forEach((image) => {
        // console.log(window.innerWidth);
        // console.log((window.innerWidth - evt.clientX*image.getAttribute('data-speed'))/200, (window.innerHeight - evt.clientY*image.getAttribute('data-speed'))/200);
        image.style.transition = `all 0.5 ease-in-out`;
        image.style.transform = `perspective(500px) translateX(${(window.innerWidth - evt.clientX*image.getAttribute('data-speed'))/300}px) translateY(${(window.innerHeight - evt.clientY*image.getAttribute('data-speed'))/300}px) translateZ(${getComputedStyle(image).zIndex}px)`;
        // console.log(getComputedStyle(image).zIndex);
    });
})

mainSection.addEventListener('mouseleave', (evt) => {
    mainImages.forEach((image) => {
        image.style.transform = `translateX(0px) translateY(0px)`;
        image.style.transition = `transform 0.5s ease-in-out`;
        setTimeout(() => {
            image.style.transition = 'none';
          }, 500);
    })
})

// observer.observe(interludeSection);
goodsObserver.observe(goodsSection);
resizeObserver.observe(goodsSection);
resizeObserver.observe(goodPopupSection);
resizeObserver.observe(headerSection);