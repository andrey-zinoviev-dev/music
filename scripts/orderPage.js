// mainApi.getCartDetailsOnLoad

// mainApi.getCartDetailsOnLoad()
// .then((data) => {
//   cartOrdersQuantity.textContent = data.length;
//   let preFinalSum = 0;
//   data.forEach((element) => {
    
//     const cartElementFromTemplate = generateFromTemplate(cartDetailTemplate, '.order__details-content-detail');
//     const cartElementName = cartElementFromTemplate.querySelector('.order__details-content-detail-para').textContent = element.name;
//     const cartElementQuantity = cartElementFromTemplate.querySelector('.order__details-content-quantity').textContent = element.quantity;
//     const cartElementPrice = cartElementFromTemplate.querySelector('.order__details-content-detail-span').textContent = element.price;
//     orderDetailsWrapper.append(cartElementFromTemplate);
//     preFinalSum = preFinalSum + +element.price;
//   });
//   orderSubtotalPriceSpan.textContent = preFinalSum;
// });

mainApi.loadInitialCookie()
.then((data) => {
  // cartOrdersQuantity.textContent = data.length;
  let preFinalSum = 0;
  JSON.parse(data.cart).forEach((cartElement) => {
    const cartElementFromTemplate = generateFromTemplate(cartDetailTemplate, '.order__details-content-detail');
    cartElementFromTemplate.querySelector('.order__details-content-detail-para').textContent = cartElement.name;
    cartElementFromTemplate.querySelector('.order__details-content-quantity').textContent = cartElement.quantity;
    cartElementFromTemplate.querySelector('.order__details-content-detail-span').textContent = cartElement.price;
    orderDetailsWrapper.append(cartElementFromTemplate);
    preFinalSum = preFinalSum + +cartElement.price;
  });
  orderSubtotalPriceSpan.textContent = preFinalSum;
});

orderFormInputs.forEach((input) => {
  input.addEventListener('input', () => {
    formDataToSend[input.name] = input.value;
    checkInputIfValid(input);
    changeFormButtonDisability(orderFormInputs);
  });
})

deliverySelect.addEventListener('change', (evt) => {
  orderDeliveryPriceSpan.textContent = evt.currentTarget.value;
  const finalSum = sumSelectorValues(orderSubtotalPriceSpan.textContent, orderDeliveryPriceSpan.textContent);
  orderTotalPriceSpan.textContent = finalSum;
});

orderFormSubmitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log(formDataToSend);
});
