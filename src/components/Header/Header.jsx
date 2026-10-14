import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <MainHeaderContent>
          <LogoItem />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </MainHeaderContent>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};

  padding-inline: 16px;
  padding-block: 24px 20px;

  /* Tablet layout specs */
  @media (min-width: 768px) {
    padding-inline: 32px 30px;
  }

  /* Laptop layout specs */
  @media (min-width: 1024px) {
    padding-block: 21px 23px;
    gap: 48px;
  }

  /* Desktop layout specs */
  @media (min-width: 1280px) {
    padding-block: 21px 23px;
  }
`;

const MainHeaderContent = styled.div`
  position: relative;
  display: flex;

  // This allows putting the nav links to be put in the center. 
  // Since enlarging the global font size will cause the links to no longer fit into the container if a fixed-width layout constraint is set, the constraint has to be based on rem units instead of px units.
  @media (min-width: 80rem) {
    justify-content: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
`;

const LogoItem = styled(Logo)`
  margin-inline-end: 48px;

  // These declarations allow the logo to not affect the nav links' positioning, 
  // allowing them to be put in the center.
  @media (min-width: 80rem) {
    position: absolute;
    left: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  display: none;

  /* Laptop layout specs */
  @media (min-width: 1024px) {
    display: block;
  }
`;

export default Header;
