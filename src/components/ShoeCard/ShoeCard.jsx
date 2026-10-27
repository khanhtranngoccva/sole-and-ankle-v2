import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {variant !== "default" && <SpecialOfferBadge variant={variant} />}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price variant={variant}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === "on-sale" && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const SpecialOfferBadge = ({
  variant
}) => {
  let text = "";
  switch (variant) {
    case "on-sale": {
      text = "Sale!"
      break;
    }
    case "new-release": {
      text = "Just Released!"
      break;
    }
  }
  return (
    <SpecialOfferBadgeWrapper variant={variant}>
      {text}
    </SpecialOfferBadgeWrapper>
  )
};

const SpecialOfferBadgeWrapper = styled.span`
  background: ${props => props.variant === "on-sale" ? COLORS.primary : COLORS.secondary};
  color: ${COLORS.white};
  padding: 7px 9px 9px 11px;
  font-weight: 700;
  font-size: 0.875rem;
  display: block;
  position: absolute;
  right: -4px;
  top: 19px;
  border-radius: 2px;
  line-height: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: ${props => props.variant === "on-sale" ? COLORS.gray[700] : "inherit"};
  text-decoration: ${props => props.variant === "on-sale" ? "line-through" : "normal"};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
