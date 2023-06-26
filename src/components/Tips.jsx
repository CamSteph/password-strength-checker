import React from 'react';
import styled from 'styled-components';

const TipsWrapper = styled.section`
  width: 100%;
  min-height: 18rem;
  background-color: var(--black-color-secondary);
  padding: 2rem;
  color: var(--white-color-primary);
  margin: 2rem 0;
  border-radius: var(--rounded-border);
  text-align: left;
  font-size: calc(16px * var(--font-scale));
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3rem repeat(3, 1fr);
  place-content: center;
  
  .tip-title {
    grid-column: 1 / span 2;
    grid-row: 1;
    font-size: calc(16px * var(--font-scale));
    text-align: left;
  }

  .tip-data {
    opacity: .80;
    max-width: 20rem;

    em {
      color: var(--highlight-color-primary);
    }
  }
`;

const Tips = () => {

  const arrOfTips = [
    {title: 'Length', shortDescription: 'Opt for a password that is sufficiently long.'},
    {title: 'Complexity', shortDescription: 'Mixing different character types increases the complexity of the password.'},
    {title: 'Patterns', shortDescription: 'Avoid predictable patterns such as 123456 or qwerty.'},
    {title: 'Uniqueness', shortDescription: 'Use a different and unique password for each of your accounts.'},
    {title: 'Personal Info', shortDescription: 'Avoid using personal information such as your name, birthdate, etc.'},
    {title: 'Update', shortDescription: 'Regularly change your passwords.'},
  ];

  return (
    <TipsWrapper>
      <h1 className="tip-title">Tips to a secure password:</h1>
      {arrOfTips.map((tip, index) => <span className="tip-data" key={index}><b><em>{tip.title}</em></b>: {tip.shortDescription}</span>)}
    </TipsWrapper>
  )
}

export default Tips