const headline = document.querySelector('.main__headline');
const header = document.querySelector('.header');

document.addEventListener('scroll', (evt) => {
    if (scrollY >= 100) {
        header.classList.add('header_background-added')
    } else {
        header.classList.remove('header_background-added');
    }
    
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
        
        // if(goodPopupSelect.value.includes('размер')) {
        //     goodPopupOrderButton.disabled = true;
        // };

        goodPopupSection.classList.add('popup_opened');
    });
    goodsWrapper.append(goodElementFromTemplate);

    goodsCards.push(goodElementFromTemplate);
});

const showSelectValue = function(element, good) {
    return good.size[element.value];
}

goodPopupSelect.addEventListener('change', (evt) => {
    
    const sizeOfGood = +showSelectValue(evt.currentTarget, goodElement);
    
    spanQuantityLeft.textContent = sizeOfGood;
    
    if(goodPopupSelect.value.includes('размер') || sizeOfGood <= 0) {
        spanQuantity.textContent = 'Закончилось';
        spanQuantityLeft.textContent = '';
        goodPopupOrderButton.classList.add('popup__order-button_disabled');
        return goodPopupOrderButton.disabled = true;
    } 
        spanQuantity.textContent = 'Осталось ';
        goodPopupOrderButton.classList.remove('popup__order-button_disabled');
        return goodPopupOrderButton.disabled = false;
});

goodPopupOrderButton.addEventListener('click', () => {
    console.log('yes');
})
// headline.classList.add('main__headline_active');
// setInterval(() => {
//     headline.classList.add('main__headline_fixed')
// }, 2000)

observer.observe(interludeSection);
goodsObserver.observe(goodsSection);