import styled from "styled-components";

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 50px;
    width: 250px;
    border: 1px solid #E8E8E8;
    background-color: white;
    padding: 5px 5px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

const Title = styled.span`
    color: #959595;
    font-weight: 900;
    font-size: 0.9em;
    line-height: 0.86;
`;

function Dropdown() {
    return <DropdownWrapper>
        <Title>Platform</Title>
        <Title>Workspaces</Title>
        <Title>Account</Title>
    </DropdownWrapper>
}

export default Dropdown;