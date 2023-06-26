import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 3rem;
  background: var(--black-color-secondary);
  color: var(--white-color-primary);
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p className="footer-title">Password Strength Checker &copy;</p>
    </FooterWrapper>
  );
};

export default Footer;