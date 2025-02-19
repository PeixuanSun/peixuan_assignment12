import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableFooter = styled.tfoot``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

export const Table: React.FC<TableProps> & {
  Header: typeof TableHeader;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Cell: typeof TableCell;
} = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

// Assign the subcomponents to the Table component
Table.Header = TableHeader;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Cell = TableCell; 