import { commonWords } from "./commonWords";

const checkForCommonWords = (password) => {
  const lowercasePassword = password.toLowerCase();
  let isWeakPassword = false;

  if (commonWords.includes(lowercasePassword)) {
    isWeakPassword = true;
  }

  return isWeakPassword;
};

const calculatePoolUniqueness = (password) => {
  let uniqueness = 1;

  if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g.test(password)) uniqueness += 62;
  else if (/(?=.*[a-z])(?=.*[A-Z])/g.test(password)) uniqueness += 52;
  else if (/(?=.*[a-z])(?=.*[0-9])/g.test(password)) uniqueness += 52;
  else if (/(?=.*[a-z])/g.test(password)) uniqueness += 26;
  else if (/(?=.*[A-Z])/g.test(password)) uniqueness += 26;
  else if (/(?=.*[0-9])/g.test(password)) uniqueness += 10;

  if (/[`~!@#\$%\^&\*\(\)-=_\+\[{\]}\\)]+/g.test(password)) uniqueness += 32;

  const uniqueCharsSize = new Set(password).size;
  const isWeakPassword = checkForCommonWords(password);

  // console.log(uniqueCharsSize, isWeakPassword);
 
  if (uniqueCharsSize <= 5 || isWeakPassword) uniqueness = 1;

  // if (!(password.length > uniqueCharsSize * 2)) uniqueness = 1;
  const distinctValueDifference = password.length / uniqueCharsSize;
  console.log(Math.log2(Math.pow(.200091, 25)));

  return uniqueness;
};

export const calculatePasswordStrength = (password = '') => {
  if (password.length < 1) return 'empty';

  const passwordLength = password.length;
  const passwordUniqueness = calculatePoolUniqueness(password);
  const passwordStrength = Math.abs(Math.log2(Math.pow(passwordUniqueness, passwordLength))).toFixed(2);

  console.log({passwordLength, passwordUniqueness, passwordStrength});

  if (passwordStrength <= 10) {
    return 'very-weak';
  } else if (passwordStrength > 10 && passwordStrength <= 20) {
    return 'weak';
  } else if (passwordStrength > 20 && passwordStrength <= 50) {
    return 'medium';
  } else if (passwordStrength > 50 && passwordStrength <= 70) {
    return 'strong';
  } else {
    return 'very-strong';
  }
};