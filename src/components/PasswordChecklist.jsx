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
`;

const PasswordChecklist = ({
  passwordlength
}) => {
  return (
    <ChecklistWrapper>
      <span><b>{passwordlength} characters containing:</b></span>
      <span title="a-z">Lower case</span>
      <span title="A-Z">Uppercase</span>
      <span title="0-9">Numbers</span>
      <span title="`~!@#$%^&*()-=_+[{]}">Symbols</span>
    </ChecklistWrapper>
  );
};

export default PasswordChecklist;