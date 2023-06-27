import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  padding: .8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--black-color-secondary);

  .logo {
    font-size: 1.5rem;
    font-size: calc(16px * var(--font-scale));
    color: var(--white-color-primary);
  }

  .header-nav {
    width: inherit;

    .nav-ul {
      height: 100%;
      width: inherit;
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style-type: none;
      
      li {

        a {
          text-decoration: none;
          color: var(--white-color-primary);

          &:hover {
            color: var(--highlight-color-primary);
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="logo">Secure Password.</h1>
      <nav className="header-nav">
        <ul className="nav-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contributions">Contributions</Link></li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

export default Header