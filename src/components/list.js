import React from "react";
import styled from "styled-components";

export const List = props => (
  <Wrapper>
    {props.data.map(({ name }) => (
      <Item key={name}>{name}</Item>
    ))}
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
