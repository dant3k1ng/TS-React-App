import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { EditButton } from "../../../shared/styleHelpers/components/EditButton";
import { IUser } from "../../../entities/User";
import {
    ActionBox, CityName, CompanyName, DataContent, DataContentColumn, DataContentRow, HeaderContainer,
    HeaderTopButton, HeaderTopContainer, SeeProfileButton, StreetName, UserAvatar, UserAvatarBox,
    UserDataContainer, UserEmail, Username, UserPhone
} from "./styles/HeaderStyles";

interface IProps {
    user: IUser | null;
}

interface IState {
    editMode: boolean;
    user: IUser | null;
}

class Header extends React.Component<IProps, IState>
{
    constructor(props: IProps) {
        super(props);

        this.state = {
            editMode: false,
            user: props.user,
        };
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.state.user === null && prevProps.user !== this.props.user) {
            this.setState({ user: this.props.user });
        }
    }

    changeEditMode()
    {
        this.setState({editMode: !this.state.editMode});
    }

    render() 
    {
        const user = this.state.user;

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
                                {
                                    this.state.editMode ? (
                                        null
                                    ) : (
                                        <EditButton onClick={() => this.changeEditMode()}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </EditButton>
                                    )
                                }
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
}

export default Header;