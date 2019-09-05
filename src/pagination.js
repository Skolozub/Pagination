import React from "react";

export const Pagination = ({ count, changePage }) => (
  <div>
    <div onClick={() => changePage(-1)}>prev</div>
    {[...Array(count)].map((_, index) => (
      <div key={index} onClick={() => changePage(null, index + 1)}>
        {index + 1}
      </div>
    ))}
    <div onClick={() => changePage(1)}>next</div>
  </div>
);
