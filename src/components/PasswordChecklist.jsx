import React from 'react';
import styled from 'styled-components';

const ChecklistWrapper = styled.section`
  width: 100%;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: var(--black-color-primary);
  color: var(--white-color-primary);
  border-radius: var(rounded-border);
  cursor: default;

  span {
    font-size: 14px;
  }

  .active {
    color: #1abe1a;
  }
`;

const PasswordChecklist = ({
  passwordlength,
  passwordChecklist,
}) => {

  return (
    <ChecklistWrapper>
      <span><b>{passwordlength} characters containing:</b></span>
      <span title="a-z" className={passwordChecklist?.lowerCase ? 'active' : ''}>Lower case</span>
      <span title="A-Z" className={passwordChecklist?.upperCase ? 'active' : ''}>Uppercase</span>
      <span title="0-9" className={passwordChecklist?.numbers ? 'active' : ''}>Numbers</span>
      <span title="`~!@#$%^&*()-=_+[{]}" className={passwordChecklist?.specialChars ? 'active' : ''}>Symbols</span>
    </ChecklistWrapper>
  );
};

export default PasswordChecklist;