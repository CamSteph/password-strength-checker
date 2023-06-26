import React from 'react';
import styled from 'styled-components';
import { calculatePasswordStrength } from '../utilities';

const ResultDisplayWrapper = styled.section`
  width: 100%;
  min-height: 6rem;
  background: var(--black-color-primary);
  border-radius: var(--rounded-border);
  padding: 1rem;
  color: var(--white-color-primary);
  text-align: center;
`;

const PasswordStatusMsg = styled.span`
  color: ${props => {
    switch(props.passwordstatus) {
      case 'empty': return '#555';
      case 'strong': return '#53a353';
      case 'weak': return '#ad4f4f';
      case 'medium': return '#bda832';
      default: return '#555';
    }
  }};
  font-size: calc(16px * var(--font-scale));
`;

const ResultDisplay = ({
  password
}) => {
  return (
    <ResultDisplayWrapper>
      {password.length === 0 ? (<PasswordStatusMsg passwordstatus={calculatePasswordStrength(password)}>No password</PasswordStatusMsg>) : (null)}
    </ResultDisplayWrapper>
  )
}

export default ResultDisplay