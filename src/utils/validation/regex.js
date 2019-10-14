export const regexMap = [
  { regEx: /^4[0-9]{5}/gi, cardType: 'VISA' },
  { regEx: /^5[1-5][0-9]{4}/gi, cardType: 'MASTERCARD' },
  { regEx: /^3[47][0-9]{3}/gi, cardType: 'AMEX' }
];
