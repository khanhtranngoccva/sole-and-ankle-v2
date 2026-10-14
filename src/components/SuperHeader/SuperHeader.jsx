import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInputItem>
        <SearchInput></SearchInput>
      </SearchInputItem>
      <HelpLink href="/help">Help</HelpLink>
      <ShoppingBagButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </ShoppingBagButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;

  height: 4px;

  /* Laptop layout specs */
  @media (min-width: 1024px) {
    height: auto;
    gap: 24px;
    padding-inline: 32px;
    padding-block: 7px 7px;
  }

  /* Desktop layout specs */
  @media (min-width: 1280px) {
    height: auto;
    gap: 24px;
    padding-inline: 32px;
    padding-block: 8px 6px;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;

  display: none;

  /* Tablet layout specs */
  @media (min-width: 1024px) {
    display: block;
  }
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  display: none;

  &:not(:focus-visible) {
    outline: none;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const SearchInputItem = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export default SuperHeader;
