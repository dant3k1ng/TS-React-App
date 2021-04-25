import { useSelector } from "react-redux";
import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { Item, Image, Text } from "../../../shared/styleHelpers/components/Dropdown/styles";
import FontSize from "../../../shared/styleHelpers/FontSizes";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

const UserItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
`;

const UserImage = styled.img`
    width: 34px;
    height: 34px;
    object-fit: cover;
    border-radius: 100%;
`;

const UserData = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 14px;
`;

const Username = styled.span`
    font-weight: 900;
    color: ${Color.darkBlue};
`;

const SeeProfileText = styled.button`
    color: ${Color.blue};
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: max-content;
    font-weight: 900 !important;
    font-size: ${FontSize[85]};
`;

function Account() 
{
    const userName = useSelector((state: any) => state?.user?.name);

    return (
        <ItemsContainer>
            <UserItem>
                <UserImage src="img/avatar.jpg" alt="user" />
                <UserData>
                    <Username>{userName}</Username>
                    <SeeProfileText>See profile</SeeProfileText>
                </UserData>
            </UserItem>
            <Item>
                <Image src="./img/icons/privacy.svg" alt="publications"/>
                <Text>Privacy</Text>
            </Item>
            <Item>
                <Image src="./img/icons/settings.svg" alt="publications"/>
                <Text>Settings</Text>
            </Item>
        </ItemsContainer>
    );
}

export default Account;