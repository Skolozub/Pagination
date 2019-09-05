import React, { Component } from "react";
import { decodeGetParams, encodeGetParams } from "../functions";
import { history } from "../index";

export const withPagination = options => (
  WrappedComponent,
  PaginationComponent
) =>
  class WithPaginationHOC extends Component {
    // -----------------Methods-------------------

    setParams = params =>
      this.setState(state => ({ ...state, params: decodeGetParams(params) }));

    changePage = (step, page) => {
      const {
        location: { pathname }
      } = history;
      const { params } = this.state;

      const newPage = page || Number(params.page) + step;

      const changedParams = Object.entries(params).map(([key, value]) => [
        key,
        key === "page" ? newPage : value
      ]);

      history.push(`${pathname}${encodeGetParams(changedParams)}`);
    };

    // -------------------------------------------
    // ----------------Lifecycle------------------

    componentDidMount = () => {
      const { fetchData } = this.props;
      const {
        location: { search }
      } = history;
      console.log("mount", decodeGetParams(search));
      this.setState({ params: { a: 1 } });
      // this.setParams(search);
      // const data = await fetchData(search);
      // this.setState({ data });
    };

    componentDidUpdate = prevProps => {
      const { fetchData } = this.props;
      const {
        location: { search }
      } = history;
      console.log(prevProps.location.search, "-", search);

      if (prevProps.location.search !== search) {
        // this.setParams(search);
        // const data = await fetchData(search);
        // this.setState({ data });
      }
    };

    // -------------------------------------------

    state = {
      data: [],
      params: {}
    };

    render = () => {
      return (
        <>
          {/* <WrappedComponent {...this.props} {...this.state} />
          <PaginationComponent
            {...this.props}
            {...this.state}
            changePage={this.changePage}
          /> */}
        </>
      );
    };
  };
