const headline = document.querySelector('.main__headline');
const header = document.querySelector('.header');

document.addEventListener('scroll', (evt) => {
    if (pageYOffset >= 100) {
        header.classList.add('header_background-added')
    } else {
        header.classList.remove('header_background-added');
    }
    
})

headline.classList.add('main__headline_active');
setInterval(() => {
    headline.classList.add('main__headline_fixed')
}, 2000)    