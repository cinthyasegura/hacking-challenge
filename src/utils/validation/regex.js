// var payCardType = "";
export const regexMap = [
  { regEx: /^4[0-9]{5}/gi, cardType: 'VISA' },
  { regEx: /^5[1-5][0-9]{4}/gi, cardType: 'MASTERCARD' },
  { regEx: /^3[47][0-9]{3}/gi, cardType: 'AMEX' }
];

// for (var j = 0; j < regexMap.length; j++) {
//   if (cardNum.match(regexMap[j].regEx)) {
//     payCardType = regexMap[j].cardType;
//     break;
//   }
// }
