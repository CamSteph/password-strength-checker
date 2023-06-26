import React from 'react';
import styled from 'styled-components';

const PasswordInputWrapper = styled.section`
  width: 100%;
  min-height: 2rem;
  background-color: var(--highlight-color-primary);
  border-radius: var(--rounded-border);
  display: grid;
  place-items: center;

  .input-wrapper {
    display: grid;
    grid-template-columns: 20rem auto;
    grid-column-gap: 1rem;

    .password-input {
      width: 100%;
      height: 2.5rem;
      padding: .5rem;
      border-radius: var(--rounded-border-sm);
      outline: none;
      border: none;
      font-size: 1.7rem;

    }

    .clear-btn {
      outline: none;
      border: none;
      border-radius: var(--rounded-border-sm);
      padding: .5rem;
      background-color: #e74545;
      color: var(--white-color-primary);
      cursor: pointer;
    }
  }
`;

const PasswordInput = ({
  password,
  setPassword,
}) => {

  const handlePasswordChange = (e) => {
    const updatedValue = e.target.value.trim();
    setPassword(updatedValue);
  };

  return (
    <PasswordInputWrapper>
      <div className="input-wrapper">
        <input 
          className="password-input" 
          type="text" 
          autoFocus
          placeholder="Enter password here"
          onChange={(e) => handlePasswordChange(e)}
        />
        {password.length ? (<button className="clear-btn">CLEAR</button>) : (null)}
      </div>
    </PasswordInputWrapper>
  );
};

export default PasswordInput;