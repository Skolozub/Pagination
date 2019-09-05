import React from "react";
import { Pagination } from "../pagination";
import axios from "axios";
import { List } from "../list";
import { withPagination } from "../HOC/withPagination";

const options = {};

const ListWithPagination = withPagination(options)(List, Pagination);

export const Users = () => {
  const fetchUsers = async query => axios.get(`/people${query}`);

  return (
    <div>
      <h1>Users</h1>

      <ListWithPagination fetchUsers={fetchUsers} />
    </div>
  );
};
