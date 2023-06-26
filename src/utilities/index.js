
const calculatePoolUniqueness = (password) => {
  let uniqueness = 0;

  if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g.test(password)) uniqueness += 62;
  else if (/(?=.*[a-z])(?=.*[A-Z])/g.test(password)) uniqueness += 52;
  else if (/(?=.*[a-z])(?=.*[0-9])/g.test(password)) uniqueness += 52;
  else if (/(?=.*[a-z])/g.test(password)) uniqueness += 26;
  else if (/(?=.*[A-Z])/g.test(password)) uniqueness += 26;
  else if (/(?=.*[0-9])/g.test(password)) uniqueness += 10;

  if (/[`~!@#\$%\^&\*\(\)-=_\+\[{\]}\\)]+/g.test(password)) uniqueness += 32;

  const uniqueChars = new Set(password);
  // if (uniqueChars.size < 3) uniqueness = 0;
  // else if (uniqueChars.size < 5) uniqueness = 1;

  return uniqueness * (uniqueChars.size - 1);
};

export const calculatePasswordStrength = (password = '') => {
  if (password.length < 1) return 'empty';

  const passwordLength = password.length;
  const passwordUniqueness = calculatePoolUniqueness(password);
  const passwordStrength = Math.log2(Math.pow(passwordUniqueness, passwordLength)).toFixed(2);

  console.log(passwordStrength);

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