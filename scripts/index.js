const headline = document.querySelector('.main__headline');
const header = document.querySelector('.header');

document.addEventListener('scroll', function() {
    if(pageYOffset >= 100) {
        header.classList.add('header_background-added');
    } else if (pageYOffset <= headline.offsetTop) {
        header.classList.remove('header_background-added');
    }
})