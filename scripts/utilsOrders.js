//selectors
const cartOrdersQuantity = document.querySelector('.header__cart-button-span');
const orderSection = document.querySelector('.order');
const orderDetailsWrapper = orderSection.querySelector('.order__details-content-wrapper');
const orderForm = orderSection.querySelector('.order__form');
const orderFormInputs = Array.from(orderForm.querySelectorAll('.order__form-input'));
const orderPhoneInput = orderForm.querySelector('.order__form-input');
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
    errorMessage = `Необходимо ввести ${input.minLength} символов`;
  };

  if(input.validity.patternMismatch) {
    if(input.name === 'email') {
      errorMessage = `Необходима потча формата email@example.com`;
    }
    if(input.name === 'phone') {
      errorMessage = 'Необходим телефон формата +7 (123) 456 78 90';
    }
  }

  if(input.validity.tooLong) {
    errorMessage = `Неободимо ввести ${input.maxLength} символов`;
  }
  
  return input.nextElementSibling.textContent = errorMessage;
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
  // console.log(checkInputsOnInvalidity(inputs));
  if(!checkInputsOnInvalidity(inputs)) {
    orderFormSubmitButton.classList.add('order__form-button-submit_enabled');
    return orderFormSubmitButton.disabled = false;
  }
  orderFormSubmitButton.classList.remove('order__form-button-submit_enabled');
  return orderFormSubmitButton.disabled = true;
};

function stylePhoneInput(inputValue) {
  
  if (!inputValue) {
    return '';
  }
 
  let phoneNumber = inputValue.replace(/[^\+\d]/g, '');
  // let countryCode = phoneNumber.substring(0, 2);
  // let operatorCode = phoneNumber.substring(3, 5);
  
  // let matchedCountryCode = countryCode.match(/\+?[0-9]{1}/);
  // let matchedOperatorCode = operatorCode.match(/\(d{3}\)/);

  // if(countryCode) {
  //   if(!matchedCountryCode) {
  //     return phoneNumber;
  //   }
  //   console.log('yes');

  //   if(operatorCode) {
  //     if(!matchedOperatorCode) {
  //       console.log('no');
  //       return;
  //     }
  //     return `${matchedOperatorCode}`;
  //   }
  //   return `${matchedCountryCode}`;
  // }


  let matched = phoneNumber.match(/(\+?[0-9]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/);
  if(!matched) {
    return phoneNumber;
  }
  return `${matched[1] === '8' ? matched[1] = '+7' : matched[1]} (${matched[2]}) ${matched[3]} ${matched[4]} ${matched[5]}`;
}