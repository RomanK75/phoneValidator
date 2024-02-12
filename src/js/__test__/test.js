import phoneNumberCorrection from '../main';


test("Проверка валидного номера",() => {
  let validNumber = "8 (927) 000-00-00 ";
  expect(phoneNumberCorrection(validNumber)).toBe("+79270000000");
  validNumber = "+7 960 000 00 00"
  expect(phoneNumberCorrection(validNumber)).toBe("+79600000000");
  validNumber = "86 000 000 0000"
  expect(phoneNumberCorrection(validNumber)).toBeE("+860000000000");
})