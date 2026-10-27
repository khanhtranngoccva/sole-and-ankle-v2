import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <IndexSelect
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </IndexSelect>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ShoeSidebarItem>
          <Spacer size={42} />
          <ShoeSidebar />
        </ShoeSidebarItem>
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: baseline;

  /* Laptop layout specs */
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ShoeSidebarItem = styled.div`
  display: none;

  /* Laptop layout specs */
  @media (min-width: 1024px) {
    display: block;
  }
`

const LeftColumn = styled.div`
  width: 250px;

  flex: 0 1;
  min-width: 225px;
`;

const MainColumn = styled.div`
  order: 1;
  flex: 1;

  // /* Laptop layout specs */
  // @media (min-width: 1024px) {
  //   margin-top: -0.6rem;
  // }
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
  flex-grow: 9999;
`;

const IndexSelect = styled(Select)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-grow: 1;
`;

export default ShoeIndex;
