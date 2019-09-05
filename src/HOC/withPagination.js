import React, { Component } from "react";
import { decodeGetParams } from "../global/functions";

export const withPagination = options => (
  WrappedComponent,
  PaginationComponent
) =>
  class WithPaginationHOC extends Component {
    // -----------------Methods-------------------

    paginate = async () => {
      const {
        history,
        location: { pathname, search },
        fetchData
      } = this.props;

      if (!search) history.replace(`${pathname}?page=1`);

      this.setState({ params: decodeGetParams(search) });

      const { data, count } = await fetchData(search);
      this.setState({ data, count });
    };

    // -------------------------------------------
    // ----------------Lifecycle------------------

    componentDidMount = () => {
      this.paginate();
    };

    componentDidUpdate = prevProps => {
      if (prevProps.location.search !== this.props.location.search) {
        this.paginate();
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
        <PaginationComponent {...this.props} {...this.state} />
        <WrappedComponent {...this.props} {...this.state} />
        <PaginationComponent {...this.props} {...this.state} />
      </>
    );
  };
