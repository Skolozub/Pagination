import React, { Component } from "react";
import axios from "axios";
import { history } from "../index";
import { decodeGetParams } from "../functions";

export const withList = WrappedComponent =>
  class ListHOC extends Component {
    state = {
      list: [],
      page: 1
    };

    componentDidMount = () => {
      const {
        location: { search }
      } = history;
      console.log(history);

      this.setCurrentPage(search);
      this.fetchUsers(search);
    };

    componentDidUpdate = prevProps => {
      const {
        location: { search }
      } = history;

      if (prevProps.location.search !== search) {
        this.setCurrentPage(search);
        this.fetchUsers(search);
      }
    };

    setCurrentPage = params => {
      const currentPage = decodeGetParams(params).page;
      this.setState({ page: currentPage });
    };

    changePage = step =>
      history.push(`/list/?page=${Number(this.state.page) + step}`);

    render = () => {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          changePage={this.changePage}
        />
      );
    };
  };
