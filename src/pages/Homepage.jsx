import React, { useState } from 'react';
import { styled } from 'styled-components';
import PasswordInput from '../components/PasswordInput';
import ResultDisplay from '../components/ResultDisplay';

const HomepageWrapper = styled.main`
  width: 100%;
  height: 90vh;
  padding: 2rem 4rem;
  background: var(--offwhite-color);
  display: grid;
  grid-template-rows: 3rem 5rem 1fr;
  grid-row-gap: 1rem;

  .main-title {
    text-align: center;
    font-size: calc(16px * var(--font-scale) * var(--font-scale));
    
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
    </HomepageWrapper>
  );
};

export default Homepage;