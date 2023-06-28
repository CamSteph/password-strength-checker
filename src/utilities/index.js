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
  let uniqueness = 0;
  let lowercase = false;
  let uppercase = false;
  let numbers = false;
  let specialChars = false;

  if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g.test(password)) {
    uniqueness += 62;
    lowercase = true;
    uppercase = true;
    numbers = true;
  }
  else if (/(?=.*[a-z])(?=.*[A-Z])/g.test(password)) {
    uniqueness += 52;
    lowercase = true;
    uppercase = true;
  }
  else if (/(?=.*[a-z])(?=.*[0-9])/g.test(password)) {
    uniqueness += 52;
    lowercase = true;
    numbers = true;
  }
  else if (/(?=.*[a-z])/g.test(password)) {
    uniqueness += 26;
    lowercase = true;
  }
  else if (/(?=.*[A-Z])/g.test(password)) {
    uniqueness += 26;
    uppercase = true;
  }
  else if (/(?=.*[0-9])/g.test(password)) {
    uniqueness += 10;
    numbers = true;
  }
  if (/[^\w\s]/g.test(password)) {
    uniqueness += 32;
    specialChars = true;
  }

  const passwordChecklist = {
    lowerCase: lowercase,
    upperCase: uppercase,
    numbers,
    specialChars,
  };

  const uniqueCharsSize = new Set(password).size;
  const isWeakPassword = checkForCommonWords(password);
 
  if (uniqueCharsSize <= 5 || isWeakPassword || uniqueness < 1) uniqueness = 1;
  // if (!(password.length > uniqueCharsSize * 2)) uniqueness = 1;
  // const distinctValueDifference = password.length / uniqueCharsSize;
  // console.log(Math.log2(Math.pow(.200091, 25)));

  return {uniqueness, passwordChecklist};
};

export const calculatePasswordStrength = (password = '') => {
  if (password.length < 1) return {passwordStrengthKey: 'empty'};

  const passwordLength = password.length;
  const {uniqueness: passwordUniqueness, passwordChecklist} = calculatePoolUniqueness(password);
  let passwordStrengthKey;
  const passwordStrength = Math.log2(Math.pow(passwordUniqueness, passwordLength)).toFixed(2);

  if (passwordStrength <= 10) {
    passwordStrengthKey = 'very-weak';
  } else if (passwordStrength > 10 && passwordStrength <= 20) {
    passwordStrengthKey = 'weak';
  } else if (passwordStrength > 20 && passwordStrength <= 50) {
    passwordStrengthKey = 'medium';
  } else if (passwordStrength > 50 && passwordStrength <= 70) {
    passwordStrengthKey = 'strong';
  } else {
    passwordStrengthKey = 'very-strong';
  }

  return {passwordStrengthKey, passwordChecklist};
};