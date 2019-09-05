import React from "react";
import { Link } from "react-router-dom";
import { encodeGetParams } from "../global/functions";

export const Pagination = ({ count, location: { pathname }, params }) => (
  <div>
    <Link
      to={`${pathname}${encodeGetParams({
        ...params,
        page: Number(params.page) - 1
      })}`}
    >
      prev
    </Link>

    {[...Array(count)].map((_, index) => (
      <Link
        key={index}
        to={`${pathname}${encodeGetParams({ ...params, page: index + 1 })}`}
      >
        {index + 1}
      </Link>
    ))}

    <Link
      to={`${pathname}${encodeGetParams({
        ...params,
        page: Number(params.page) + 1
      })}`}
    >
      next
    </Link>
  </div>
);
