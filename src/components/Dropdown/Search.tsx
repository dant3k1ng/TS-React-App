import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0 12px;
`;

const SearchInput = styled.input`
    height: 85%;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #E8E8E8;
    font-size: 1.1em;
    padding: 3px 2px;

    &:focus {
      outline: none;
    }
`;

interface IProps {
  onChangeHandler: React.ChangeEventHandler;
}

function Search(props: IProps) {
  return (
    <SearchWrapper>
      <SearchInput onChange={props.onChangeHandler} type="text" placeholder="Filter..." />
    </SearchWrapper>
  );
}

export default Search;