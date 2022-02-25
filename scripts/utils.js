const goods = [
  {
    name: "Футболка Сердце",
    path:"images/shirts.png",
    quantity: 0,
  },
  {
    name: "худи Сердце",
    path: "images/hoodie.png",
    quantity: 2,
  }, 
  {
    name: "Футболка Ярослав",
    path: "images/yaroslav_t-shirt.png",
    quantity: 1,
  },
];

//selectors
const goodsWrapper = document.querySelector('.goods__wrapper');

//templates
const goodTemplate = document.querySelector('#good');

//functions
function generateFromTemplate(template, selector) {
  return template.content.cloneNode(true).querySelector(selector);
}