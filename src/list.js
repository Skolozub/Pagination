import React from "react";

export const List = props => {
  // console.log("List props", props);

  return (
    <div>
      {props.data.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};
