import React, { Component } from "react";
import PropTypes from "prop-types";
import { decodeGetParams, encodeGetParams } from "../global/functions";

export const withPagination = options => (
  WrappedComponent,
  PaginationComponent
) =>
  class WithPaginationHOC extends Component {
    static propTypes = {
      fetchData: PropTypes.func.isRequired,
      location: PropTypes.object.isRequired,
      pathname: PropTypes.string,
      search: PropTypes.string,
      count: PropTypes.number
    };
    // -----------------Methods-------------------

    paginate = async () => {
      const {
        history,
        location: { pathname, search },
        fetchData
      } = this.props;

      const params = decodeGetParams(search);
      if (!params.page) {
        const paramsWithPage = { ...params, page: 1 };
        const searchWithPage = encodeGetParams(paramsWithPage);
        return history.replace(`${pathname}${searchWithPage}`);
      }

      this.setState({ params, isLoading: true });

      const { data, count } = await fetchData(search);
      this.setState({ data, count, isLoading: false });
    };

    // ----------------Lifecycle------------------

    componentDidMount = () => {
      this.paginate();
    };

    componentDidUpdate = () => {
      const params = decodeGetParams(this.props.location.search);

      if (String(this.state.params.page) !== String(params.page)) {
        this.paginate();
      }
    };

    // -------------------------------------------

    state = {
      data: [],
      params: {},
      count: 1,
      isLoading: true
    };

    render = () => (
      <>
        <PaginationComponent {...this.props} {...this.state} />
        <WrappedComponent {...this.props} {...this.state} />
        <PaginationComponent {...this.props} {...this.state} />
      </>
    );
  };
