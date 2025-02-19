import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value }) => {
  return (
    <label>
      <StyledRadioButton type="radio" name={name} value={value} />
      {label}
    </label>
  );
}; 