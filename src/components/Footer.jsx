import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 3rem;
  background: var(--black-color-primary);
  color: var(--white-color-primary);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      This is the footer.
    </FooterWrapper>
  );
};

export default Footer;