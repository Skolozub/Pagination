import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = props => (
  <div>
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/users/?page=1">
        Users
      </NavLink>
    </div>
    {props.children}
  </div>
);
