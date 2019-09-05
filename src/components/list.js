import React from "react";

export const List = props => (
  <div>
    {props.data.map(({ name }) => (
      <div key={name}>{name}</div>
    ))}
  </div>
);
