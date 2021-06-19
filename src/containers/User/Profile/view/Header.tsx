import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EditButton } from "../../../../shared/styleHelpers/components/ActionButton";
import {
    ActionBox, CityName, CompanyName, DataContent, DataContentColumn, DataContentRow, HeaderContainer,
    HeaderTopButton, HeaderTopContainer, SeeProfileButton, StreetName, UserAvatar, UserAvatarBox,
    UserDataContainer, UserEmail, Username, UserPhone
} from "../styles/HeaderStyles";
import { GetLoggedUser } from "../../../../helpers/User";

interface IProps {
    setEditMode: Function;
}

function Header(props: IProps) {
    const user = GetLoggedUser();

    return (
        <HeaderContainer>
            <HeaderTopContainer>
                <HeaderTopButton>Message</HeaderTopButton>
                <HeaderTopButton>Create a request</HeaderTopButton>
                <HeaderTopButton>Add to a cluster</HeaderTopButton>
            </HeaderTopContainer>
            <UserDataContainer>
                <UserAvatarBox>
                    <UserAvatar src="img/avatar.jpg" alt="profile avatar" />
                    <SeeProfileButton>See profile</SeeProfileButton>
                </UserAvatarBox>
                <DataContent>
                    <DataContentRow>
                        <DataContentColumn>
                            <Username>{user?.name}</Username>
                            <CompanyName>{user?.company?.name}</CompanyName>
                        </DataContentColumn>
                        <ActionBox>
                            <EditButton onClick={() => props.setEditMode(true)}>
                                <FontAwesomeIcon icon={faPen} />
                            </EditButton>
                        </ActionBox>
                    </DataContentRow>
                    <DataContentRow>
                        <DataContentColumn>
                            <CityName>{user?.address?.city}</CityName>
                            <StreetName>{user?.address?.street}</StreetName>
                        </DataContentColumn>
                        <DataContentColumn>
                            <UserEmail>{user?.email}</UserEmail>
                            <UserPhone>{user?.phone}</UserPhone>
                        </DataContentColumn>
                    </DataContentRow>
                </DataContent>
            </UserDataContainer>
        </HeaderContainer>
    );
}

export default Header;