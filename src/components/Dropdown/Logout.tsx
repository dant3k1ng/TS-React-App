import styled from "styled-components";
import Color from "../../shared/styledHelpers/Colors";

const LogoutContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px 0;

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