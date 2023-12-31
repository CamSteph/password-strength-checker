import React, { useEffect } from 'react';
import styled from 'styled-components';
import { calculatePasswordStrength } from '../utilities';

const ResultDisplayWrapper = styled.section`
  width: 100%;
  width: 100%;
  min-height: 5rem;
  border-radius: var(--rounded-border);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 1rem;
  color: var(--white-color-primary);
  text-align: center;
  background-color: ${props => {
    switch(props.passwordstatus) {
      case 'empty': return '#747474';
      case 'very-weak':
      case 'weak': return '#ad4f4f';
      case 'medium': return '#bda832';
      case 'strong':
      case 'very-strong': return '#53a353';
      default: return '#747474';
    }
  }};
`;

const PasswordStatusMsg = styled.span`
  font-size: calc(16px * var(--font-scale));
  word-wrap: break-word;
`;

const ResultDisplay = ({
  password,
  setPasswordChecklist,
  passwordStrength,
  setPasswordStrength,
}) => {

  const generatePasswordStrengthMsg = () => {
    switch (passwordStrength) {
      case 'very-weak': return 'Your password is very weak!';
      case 'weak': return 'Your password is weak.';
      case 'medium': return 'Your password is reasonable, but could be better.';
      case 'strong': return 'Your password is strong.';
      case 'very-strong': return 'Legendary password strength!';
      default: return 'Something went wrong.';
    };

  };

  useEffect(() => {
    const { passwordStrengthKey, passwordChecklist } = calculatePasswordStrength(password);
    setPasswordChecklist(passwordChecklist);
    setPasswordStrength(passwordStrengthKey);
  }, [password]);

  return (
    <ResultDisplayWrapper passwordstatus={passwordStrength}>
      {password.length === 0 ? 
        (<PasswordStatusMsg>No password entered</PasswordStatusMsg>) 
      : 
        (
          <PasswordStatusMsg>
            {generatePasswordStrengthMsg(password)}
          </PasswordStatusMsg>
        )
      }
    </ResultDisplayWrapper>
  )
}

export default ResultDisplay