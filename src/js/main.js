export default function phoneNumberCorrection(phoneNumber) {
  const countriesCodes = [
    { 86: { country: 'China', length: 12 } },
    { 375: { country: 'Belarus', length: 12 } },
  ];

  const phoneNumberCorrected = `+${String(phoneNumber.trim().replace(/[^0-9]/g, ''))}`;
  const countryCode = String(phoneNumber).replace('+', '').split(' ')[0]
  // If number starts with 7
  if (countryCode === '7') {
    return phoneNumberCorrected;
  // If number start with 8
  } if (countryCode === '8') {
    return phoneNumberCorrected.replace('8', '7');
  }
  for (let i = 0; i < countriesCodes.length; i++) {
    // Country code check
    // console.log(countryCode)
    // console.log(Object.keys(countriesCodes[i]))
    if (countryCode == Object.keys(countriesCodes[i])) {
      // length check
      if (phoneNumberCorrected.length === Object.values(countriesCodes[i])[0].length + 1) {
        return phoneNumberCorrected;
      }
      // length error
      throw new Error(`Ошибка : Не верная длинна номера, Страна : ${Object.values(countriesCodes[i])[0].country}, Длинна номера : ${Object.values(countriesCodes[i])[0].length}`);
    }
  }
  // Invalid number
  throw new Error('Ошибка : Не верный формат номера');
}