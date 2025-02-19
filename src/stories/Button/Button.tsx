import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

/** Styled button component */
const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Arial', sans-serif;
  padding: ${({ size }) => (size === 'small' ? '10px 16px' : size === 'large' ? '12px 24px' : '11px 20px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};
  background-color: ${({ primary, disabled }) => (disabled ? '#aaa' : primary ? '#007bff' : 'transparent')};
  color: ${({ primary, disabled }) => (disabled ? '#666' : primary ? 'white' : '#333')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

/** Button component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton primary={primary} size={size} disabled={disabled} {...props}>
      {label}
    </StyledButton>
  );
};