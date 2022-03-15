//selectors
const orderSection = document.querySelector('.order');
const orderSubtotalPriceSpan = orderSection.querySelector('.order__details-price-subtotal');
const orderDeliveryPriceSpan = orderSection.querySelector('.order__details-price-delivery');
const orderTotalPriceSpan = orderSection.querySelector('.order__details-price-total');

//functions
function sumSelectorValues(value1, value2) {
  return +value1 + +value2;
};

const finalSum = sumSelectorValues(orderSubtotalPriceSpan.textContent, orderDeliveryPriceSpan.textContent);
orderTotalPriceSpan.textContent = finalSum;