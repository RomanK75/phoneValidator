export default function phoneNumberCorrection(phoneNumber) {
  const countriesCodes = [
    { 86: { country: 'China', length: 12 } },
    { 1: { country: 'USA', length: 11 } },
  ];

  // Remove all spaces and non-digit symbols
  const phoneNumberCorrected = String(phoneNumber.trim().replace(/[^0-9]/g, ''));
  // Get country code
  const countryCode = String(phoneNumber).replace('+', '').split(' ')[0];

  // If number it is a Russian number
  if (countryCode === '7' || countryCode === '8') {
    // length check
    if (phoneNumberCorrected.length === 11) {
      // RUS NUMBER - PASSED
    return `+7${phoneNumberCorrected.slice(1)}`;
    } else {
      // length error Russian numbers
      throw new Error('Ошибка : Не верная длинна номера');
    }
  } 
  // foreign numbers
  for (let i = 0; i < countriesCodes.length; i++) {
    // Country code check
    if (countryCode === String(Object.keys(countriesCodes[i]))) {
      // length check
      if (phoneNumberCorrected.length === Object.values(countriesCodes[i])[0].length) {
        // FORIEGN NUMBER - PASSED
        return `+${phoneNumberCorrected}`;
      }
      // length error foreign numbers
      throw new Error('Ошибка : Не верная длинна номера');
    }
  }
  // Invalid number
  throw new Error('Ошибка : Не верный код страны');
}