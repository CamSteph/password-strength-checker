import React, { useState } from 'react';
import { styled } from 'styled-components';
import PasswordInput from '../components/PasswordInput';
import ResultDisplay from '../components/ResultDisplay';
import Tips from '../components/Tips';

const HomepageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 4rem;
  background: var(--offwhite-color);
  background: var(--black-color-primary);
  display: grid;
  grid-template-rows: repeat(4, 5rem);

  .main-title {
    text-align: center;
    font-size: calc(16px * var(--font-scale) * var(--font-scale));
    color: var(--white-color-primary);
    margin-bottom: 130px !important;
    
    .keyword {
      font-size: calc(16px * var(--font-scale) * var(--font-scale));
      color: var(--highlight-color-primary);
    }
  }
`;

const Homepage = () => {

  const [password, setPassword] = useState('');

  return (
    <HomepageWrapper>
      <h1 className="main-title">Check your password's <em className="keyword">strength</em> below!</h1>
      <PasswordInput 
        password={password}
        setPassword={setPassword}
      />
      <ResultDisplay 
        password={password}
      />
      <Tips />
    </HomepageWrapper>
  );
};

export default Homepage;