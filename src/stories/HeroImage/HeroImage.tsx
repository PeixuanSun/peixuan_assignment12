import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.img`
  width: 100%;
  height: auto;
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return <StyledHeroImage src={src} alt={alt} />;
}; 