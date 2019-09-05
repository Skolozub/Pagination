import React from "react";
import { Link } from "react-router-dom";
import { encodeGetParams } from "../global/functions";
import styled from "styled-components";

export const Pagination = props => {
  const {
    count,
    location: { pathname },
    params
  } = props;
  const currentPage = Number(params.page);

  return (
    <>
      {count > 1 && (
        <Wrapper>
          <PrevBtn
            as={currentPage === 1 ? NotActiveBtn : Link}
            to={`${pathname}${encodeGetParams({
              ...params,
              page: currentPage - 1
            })}`}
          >
            Previous
          </PrevBtn>

          {[...Array(count)].map((_, index) => (
            <PageBtn
              key={index}
              as={currentPage === index + 1 && CurrentPage}
              to={`${pathname}${encodeGetParams({
                ...params,
                page: index + 1
              })}`}
            >
              {index + 1}
            </PageBtn>
          ))}

          <NextBtn
            as={currentPage === count ? NotActiveBtn : Link}
            to={`${pathname}${encodeGetParams({
              ...params,
              page: currentPage + 1
            })}`}
          >
            Next
          </NextBtn>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;
const Btn = styled(Link)`
  display: flex;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  color: #007bff;
  border: 1px solid #dee2e6;
  text-decoration: none;
  user-select: none;
`;
const PrevBtn = styled(Btn)`
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`;
const NextBtn = styled(Btn)`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;
const PageBtn = styled(Btn)``;
const NotActiveBtn = styled.div`
  color: #b3b3b3;
  cursor: default;
`;
const CurrentPage = styled.div`
  background: #007bff;
  color: #fff;
  cursor: default;
`;
