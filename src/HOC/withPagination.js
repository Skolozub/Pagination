import React, { Component } from "react";
import { decodeGetParams } from "../global/functions";

export const withPagination = options => (
  WrappedComponent,
  PaginationComponent
) =>
  class WithPaginationHOC extends Component {
    // -----------------Methods-------------------
    // -------------------------------------------
    // ----------------Lifecycle------------------

    componentDidMount = async () => {
      const { fetchData } = this.props;
      const {
        location: { search }
      } = this.props;

      const { data, count } = await fetchData(search);
      this.setState({ data, count, params: decodeGetParams(search) });
    };

    componentDidUpdate = async prevProps => {
      const { fetchData } = this.props;
      const {
        location: { search }
      } = this.props;

      if (prevProps.location.search !== search) {
        const { data, count } = await fetchData(search);
        this.setState({ data, count, params: decodeGetParams(search) });
      }
    };

    // -------------------------------------------

    state = {
      data: [],
      params: {},
      count: 1
    };

    render = () => (
      <>
        <WrappedComponent {...this.props} {...this.state} />
        <PaginationComponent {...this.props} {...this.state} />
      </>
    );
  };
