import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = props => (
  <>
    <Navigation>
      <NavigationLink exact to="/" activeClassName="active">
        Home
      </NavigationLink>
      <NavigationLink to="/users/" activeClassName="active">
        Users
      </NavigationLink>
    </Navigation>
    {props.children}
  </>
);

const Navigation = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #343a40;
`;
const NavigationLink = styled(NavLink)`
  display: flex;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  &.active {
    color: #fff;
  }
`;
