import phoneNumberCorrection from '../main';

test('Проверка валидного номера', () => {
  let validNumber = '8 (927) 000-00-00 ';
  expect(phoneNumberCorrection(validNumber)).toBe('+79270000000');
  validNumber = '+7 960 000 00 00';
  expect(phoneNumberCorrection(validNumber)).toBe('+79600000000');
  validNumber = '86 000 000 0000';
  expect(phoneNumberCorrection(validNumber)).toBe('+860000000000');
});

test('Проверка длинны номера для России', () => {
  let invalidNumber = '8 (927) 000-00-000 ';
  expect(() => phoneNumberCorrection(invalidNumber)).toThrow('Ошибка : Не верная длинна номера');
  invalidNumber = '+7 960 000 0';
  expect(() => phoneNumberCorrection(invalidNumber)).toThrow('Ошибка : Не верная длинна номера');
});

test('Проверка длинны номера для зарубежных стран', () => {
  let invalidNumber = '86 000 000 00000';
  expect(() => phoneNumberCorrection(invalidNumber)).toThrow('Ошибка : Не верная длинна номера');
  invalidNumber = '+1 960';
  expect(() => phoneNumberCorrection(invalidNumber)).toThrow('Ошибка : Не верная длинна номера');
});

test('Не верный формат номера', () => {
  const invalidNumber = '100 555 544 44 22';
  expect(() => phoneNumberCorrection(invalidNumber)).toThrow('Ошибка : Не верный код страны');
});
