import styled from "styled-components";

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const SearchInput = styled.input`
    height: 54%;
    border-radius: 3px;
    border: 1px solid #E8E8E8;
    font-size: 1.1em;
    padding: 2px 4px;
    width: 75%;

    &::-webkit-input-placeholder{
      text-align: center;
    }

    &:focus {
      outline: none;
    }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 4px;
`;

const SearchIconContainer = styled.div`
  position: relative;
  height: 54%;
`;

function Search() {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search legalcluster" />
      <SearchIconContainer>
        <SearchIcon src="img/icons/search.png" />
      </SearchIconContainer>
    </SearchWrapper>
  );
}

export default Search;
