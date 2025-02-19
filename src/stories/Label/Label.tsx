import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

/** Styled label component */
const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  margin-bottom: 4px;
  display: block;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const RequiredIndicator = styled.span`
  color: red;
  margin-left: 4px;
`;

/** Label component for displaying text */
export const Label: React.FC<LabelProps> = ({ text, htmlFor, required = false, disabled = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
      {required && <RequiredIndicator>*</RequiredIndicator>}
    </StyledLabel>
  );
}; 