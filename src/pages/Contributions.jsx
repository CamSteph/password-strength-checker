import React from 'react';
import styled from 'styled-components';

const ContributionsWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 14rem;
  background: var(--offwhite-color);
  background: var(--black-color-primary);
  color: var(--white-color-primary);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contribution-msg {
    margin-top: 2rem;
  }

`;

const Contributions = () => {
  return (
    <ContributionsWrapper>
      <h1>Welcome to the contributions page.</h1>
      <p className="contribution-msg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt exercitationem consectetur cupiditate nisi nam voluptas eos tempora illo doloribus quos. Sunt maiores voluptatibus doloremque tempore aspernatur, exercitationem quisquam corrupti necessitatibus reprehenderit laudantium! Consequatur nam veritatis accusamus ratione unde iusto tempora!
      </p>
    </ContributionsWrapper>
  );
};

export default Contributions;