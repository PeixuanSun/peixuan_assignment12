import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
}; 