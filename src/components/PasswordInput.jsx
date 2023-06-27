import React, { useState } from 'react';
import styled from 'styled-components';

const PasswordInputWrapper = styled.section`
  width: 100%;
  min-height: 2rem;
  background-color: var(--highlight-color-primary);
  border-radius: var(--rounded-border);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: grid;
  place-items: center;

  .input-wrapper {
    display: grid;
    grid-template-columns: 20rem 4rem auto;
    grid-column-gap: 1rem;

    .toggle-visibility-wrapper {
      display: flex;
      align-items: center;

      label {
        color: var(--white-color-primary);
      }

      .toggle-visibility {
        margin-left: 2px;
      }
    }

    .password-input {
      width: 100%;
      height: 2.5rem;
      padding: .5rem;
      border-radius: var(--rounded-border-sm);
      outline: none;
      border: none;
      font-size: 1.7rem;
      text-align: center;

      ::-ms-clear, ::-ms-reveal {
        display: none;
      }
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

  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <PasswordInputWrapper>
      <div className="input-wrapper">
        <input 
          className="password-input" 
          type={isShowingPassword ? "text" : "password"} 
          autoFocus
          placeholder="Enter password here"
          onChange={(e) => handlePasswordChange(e)}
          defaultValue={password}
        />
        <div className="toggle-visibility-wrapper">
          <label htmlFor="toggle-visibility">Show: </label>
          <input 
            name="toggle-visibility" 
            type="checkbox" 
            className="toggle-visibility" 
            onChange={() => setIsShowingPassword(!isShowingPassword)}
            defaultChecked={isShowingPassword}
          />
        </div>
        {password.length ? (<button className="clear-btn" onClick={() => setPassword('')}>CLEAR</button>) : (null)}
      </div>
    </PasswordInputWrapper>
  );
};

export default PasswordInput;