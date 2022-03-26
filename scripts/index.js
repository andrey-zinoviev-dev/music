mainApi.loadInitialCookie()
.then((data) => {
    console.log(data);
    if(!data.cart) {
        emptyCartListElement.classList.remove('cart__list-element_hidden');
        return;
    };
    console.log(JSON.parse(data.cart));
    goodsToAddToCart = JSON.parse(data.cart);
    // console.log(goodsToAddToCart);
    cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;

    goodsToAddToCart.forEach((good) => {
        const liToInsert = generateFromTemplate(liTempalte, '.cart__list-element');
        const removeLiFromListButton = liToInsert.querySelector('.cart__list-element-button-close');
        emptyCartListElement.classList.add('cart__list-element_hidden');

        removeLiFromListButton.addEventListener('click', () => {
            goodsToAddToCart.pop(goodToAdd);
            if(goodsToAddToCart.length <= 0) {
                 emptyCartListElement.classList.remove('cart__list-element_hidden');
            };
            
             cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;
            cartList.removeChild(liToInsert);
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
        //reset sizes select, left quantity of goods
        Array.from(goodPopupSelect.children).forEach((child) => {
            if(child.textContent.includes('размер')) {
                return;
            }
            goodPopupSelect.removeChild(child);
        });
        spanQuantity.textContent = '';
        spanQuantityLeft.textContent = '';
        goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
        goodPopupQuantityInput.value = 1;

        goodPopupSection.querySelector('.popup__headline').textContent = good.name;
        goodPopupSection.querySelector('.popup__image').src = good.path;

        Object.keys(good.size).forEach((sizeOfCloth) => {
            const optionFromTemplate = generateFromTemplate(optionTemplate, '.popup__size-select-option');
            optionFromTemplate.value = sizeOfCloth;
            optionFromTemplate.textContent = sizeOfCloth;
            goodPopupSelect.append(optionFromTemplate);
        });

        goodPopupSection.querySelector('.popup__span-good-material').textContent = good.material;
        goodPopupSection.querySelector('.popup__span-good-print').textContent = good.printMode;

        goodPopupSection.classList.add('popup_opened');
    });

    goodsWrapper.append(goodElementFromTemplate);

    goodsCards.push(goodElementFromTemplate);
});

//cloth size choose event
goodPopupSelect.addEventListener('change', (evt) => {
    const sizeOfGood = +showSelectValue(evt.currentTarget, goodElement);
    
    spanQuantityLeft.textContent = sizeOfGood;

    if(goodPopupSelect.value.includes('размер') || sizeOfGood <= 0 ) {
        spanQuantity.textContent = 'Закончилось';
        spanQuantityLeft.textContent = '';
        goodPopupQuantityWrapper.classList.remove('popup__size-form-quantity-wrapper_active');
        // return;
        goodPopupOrderButton.classList.add('popup__order-button_disabled');
        return goodPopupOrderButton.disabled = true;
    }

    spanQuantity.textContent = 'Осталось ';
    goodPopupQuantityWrapper.classList.add('popup__size-form-quantity-wrapper_active');
    // return;
    goodPopupOrderButton.classList.remove('popup__order-button_disabled');
    return goodPopupOrderButton.disabled = false;
});

//cloth quantity change event
goodPopupQuantityInput.addEventListener('input', (evt) => {
    const clothQuantity = +evt.currentTarget.value;
    
    if(clothQuantity <= 0 || clothQuantity > goodElement.size[goodPopupSelect.value]) {
        goodPopupOrderButton.classList.add('popup__order-button_disabled');
        return goodPopupOrderButton.disabled = true;
    }
    goodPopupOrderButton.classList.remove('popup__order-button_disabled');
    return goodPopupOrderButton.disabled = false;
});

//add clothes to cart event
goodPopupOrderButton.addEventListener('click', (evt) => {
    const objectToSend = {};
    objectToSend.pic = goodElement.path;
    objectToSend.name = goodElement.name;
    objectToSend.price = goodElement.price;
    elementsToSend.forEach((element) => {
        objectToSend[element.name] = element.value;   
    });

    evt.preventDefault();

    goodsToAddToCart.push(objectToSend);
    console.log(goodsToAddToCart);

    cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;

    emptyCartListElement.classList.add('cart__list-element_hidden');

    //main info to send to cart
    const liToInsert = generateFromTemplate(liTempalte, '.cart__list-element');
    const removeLiFromListButton = liToInsert.querySelector('.cart__list-element-button-close');
    removeLiFromListButton.addEventListener('click', () => {
        goodsToAddToCart.pop(objectToSend);
        if(goodsToAddToCart.length <= 0) {
            emptyCartListElement.classList.remove('cart__list-element_hidden');
        };

        cartOrdersQuantity.textContent = `${goodsToAddToCart.length}`;
        cartList.removeChild(liToInsert);

    });

    liToInsert.querySelector('.cart__list-element-img').src = objectToSend.pic;
    liToInsert.querySelector('.cart__list-element-name').textContent = objectToSend.name;
    liToInsert.querySelector('.cart__list-element-quantity').textContent = `Количество ${objectToSend.quantity}`;
    liToInsert.querySelector('.cart__list-element-price').textContent = `${objectToSend.price}`;
    cartList.append(liToInsert);

    //change cart details
    mainApi.sendCartDetails(objectToSend, localStorage.getItem('cart'))
    .then((data) => {        
        console.log(data);
        // if(localStorage.getItem('cart') === null) {
        //     return localStorage.setItem('cart', data);
        // }
        // localStorage.clear();
        // return localStorage.setItem('cart', JSON.stringify(data));
        // return goodPopupSection.classList.remove('popup_opened');
    });
});

//place order event
cartSubmitButton.addEventListener('click',  (evt) => {
    // evt.preventDefault();
    // getCartDetailsOnLoad()
    // .then((data) => {
    //     console.log(data);
    // });
    // mainApi.sendCartDetails(goodsToAddToCart)
    // .then((data) => {
    //     console.log(data);
    //     // localStorage.setItem('cart', data);
    // })
    // console.log('send data and open order summary page');
});

observer.observe(interludeSection);
goodsObserver.observe(goodsSection);