
export const calculatePasswordStrength = (password = '') => {
  if (password.length < 1) return 'empty';
  return 'strong';
};