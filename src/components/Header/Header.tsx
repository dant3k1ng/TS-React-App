import styled from "styled-components";
import FastNav from "./elements/FastNav";
import Home from "./elements/Home";
import Logo from "./elements/Logo";
import Search from "./elements/Search";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    box-shadow: 2px 5px 10px #ECECEC;
    background-color: white;
`;

const SidebarHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    min-width: 300px;
`;

const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    user-select: none;
`;

const FastNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 300px;
    min-width: 300px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <SidebarHeaderContainer>
                <Logo />
                <Home />
            </SidebarHeaderContainer>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <FastNavContainer>
                <FastNav />
            </FastNavContainer>
        </HeaderWrapper>
    );
}

export default Header;
