//selectors
const cartOrdersQuantity = document.querySelector('.header__cart-button-span');
const orderSection = document.querySelector('.order');
const orderDetailsWrapper = orderSection.querySelector('.order__details-content-wrapper');
const orderForm = orderSection.querySelector('.order__form');
const orderFormInputs = Array.from(orderForm.querySelectorAll('.order__form-input'));
// const orderFormButton = orderForm.querySelector('.order__form-button-submit');
const deliverySelect = orderSection.querySelector('.order__form-delivery-select');
const orderSubtotalPriceSpan = orderSection.querySelector('.order__details-price-subtotal');
const orderDeliveryPriceSpan = orderSection.querySelector('.order__details-price-delivery');
const orderTotalPriceSpan = orderSection.querySelector('.order__details-price-total');
const orderFormSubmitButton = orderSection.querySelector('.order__form-button-submit');

//variables
const formDataToSend = {};

//templates
const cartDetailTemplate = document.querySelector('#order-detail');

//functions
function generateFromTemplate(template, selector) {
  return template.content.cloneNode(true).querySelector(selector);
}

function sumSelectorValues(value1, value2) {
  return +value1 + +value2;
};

function checkInputIfValid(input) {
  if(input.validity.valid) {
    return hideErrorOnInputValidity(input);
  }
  return showErrorOnInputInvalidity(input);
}

function showErrorOnInputInvalidity(input) {
  let errorMessage;
  if(input.validity.tooShort) {

  };
  
  return input.nextElementSibling.textContent = input.validationMessage;
}

function hideErrorOnInputValidity(input) {
  return input.nextElementSibling.textContent = '';
}

function checkInputsOnInvalidity(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

function changeFormButtonDisability(inputs) {
  if(!checkInputsOnInvalidity(inputs)) {
    orderFormSubmitButton.classList.add('order__form-button-submit_enabled');
    orderFormSubmitButton.disabled = false;
  }
  orderFormSubmitButton.classList.remove('order__form-button-submit_enabled');
  return orderFormSubmitButton.disabled = true;
};



