import React from "react";
import styled from "styled-components";

export const List = ({ data, isNoData = data.length === 0, isLoading }) => (
  <Wrapper>
    {isLoading ? (
      <Item>Loading data...</Item>
    ) : isNoData ? (
      <Item>No data.</Item>
    ) : (
      data.map(({ name }) => <Item key={name}>{name}</Item>)
    )}
  </Wrapper>
);

const Wrapper = styled.ul`
  padding-left: 0;
`;
const Item = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
