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

//create and append goods elements in wrapper
goods.forEach((good) => {
    const goodElementFromTemplate = generateFromTemplate(goodTemplate, '.goods__good');
    goodElementFromTemplate.querySelector('.goods__good-img').src = good.path;
    goodElementFromTemplate.querySelector('.goods__good-span').textContent = good.name;
    goodElementFromTemplate.querySelector('.goods__good-quantity').textContent = good.quantity > 0 ? "Есть в наличии" : "Нет в наличии";

    goodsWrapper.append(goodElementFromTemplate);

    goodsCards.push(goodElementFromTemplate);
})

//animation interlude section




// headline.classList.add('main__headline_active');
// setInterval(() => {
//     headline.classList.add('main__headline_fixed')
// }, 2000)    

// goodsCards.forEach((goodCard) => {
//     const cardDimensions = {
//         width: Math.ceil(goodCard.getBoundingClientRect().width),
//         height: Math.ceil(goodCard.getBoundingClientRect().height),
//         x: Math.ceil(goodCard.getBoundingClientRect().x),
//         y: Math.ceil(goodCard.getBoundingClientRect().y),
//     };

//     // goodCard.addEventListener('mousemove', (evt) => {
//     //     const degreeX =  evt.pageX - cardDimensions.x - cardDimensions.width/2;
//     //     const degreeY = evt.pageY - cardDimensions.y - goodsSection.offsetTop -  cardDimensions.height/2;

//     //     // console.log(evt.pageY - goodsSection.offsetTop - 97 - goodsWrapper.offsetTop - cardDimensions.height/2);
//     //     // goodCard.style.transform = `perspective(500px) rotateX(${degreeY/12}deg) rotateY(${degreeX/15}deg)`;
//     // });

//     // goodCard.addEventListener('mouseleave', (evt) => {
//     //     goodCard.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
//     //     goodCard.style.transition = `transform 0.25s ease-in-out`;
//     //     setTimeout(() => {
//     //         goodCard.style.transition = 'none';
//     //       }, 250);
//     // })
// })

observer.observe(interludeSection);
goodsObserver.observe(goodsSection);