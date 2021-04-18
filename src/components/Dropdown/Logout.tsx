import styled from "styled-components";
import Color from "../../shared/styleHelpers/Colors";

const LogoutContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px 0;
    margin-bottom: 4px;

    &:hover {
        cursor: pointer;
    }
`;

const Text = styled.span`
    color: ${Color.gray};
    font-weight: 900;
    padding-left: 12px;
`;

function Logout() 
{
    return (
        <LogoutContainer>
            <img src="./img/icons/logout.svg" alt="logout" />
            <Text>Logout</Text>
        </LogoutContainer>
    )
}

export default Logout;