import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <StyledDropdown onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
}; 