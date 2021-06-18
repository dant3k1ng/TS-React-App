import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { SaveButton } from "../../../../shared/styleHelpers/components/ActionButton";
import {
    ActionBox, DataContent, DataContentColumn, DataContentRow, HeaderContainer,
    HeaderTopButton, HeaderTopContainer, SeeProfileButton, UserAvatar, UserAvatarBox,
    UserDataContainer, UserDataTextCompanyNameInput, UserDataTextInput, UserDataTextUsernameInput,
} from "../view/styles/HeaderStyles";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "../../../../redux/actions/UserAction";
import { GetLoggedUser } from "../../../../helpers/User";

interface IProps {
    afterSave: Function;
}

interface IUserFormAttr {
    [key: string]: string;
}

function HeaderEdit(props: IProps) {
    const user = GetLoggedUser();
    const dispatch = useDispatch();
    const [formAttr, setFormAttr] = useState<IUserFormAttr>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const attr2 = formAttr;
        attr2[event.target.name] = event.target.value

        setFormAttr({
            ...formAttr,
            [event.target.name]: event.target.value
        });
    }

    const getByFormAttr = (attr: string) => {
        if (attr in formAttr) {
            return formAttr[attr];
        }
        return null;
    }

    const saveUserData = () => {
        if (user !== null) {
            let tmpUser = user;
            tmpUser.name = getByFormAttr('user-name') || user.name;
            tmpUser.company.name = getByFormAttr('user-company-name') || user?.company?.name;
            tmpUser.address.city = getByFormAttr('address-city') || user?.address?.city;
            tmpUser.address.street = getByFormAttr('address-street') || user?.address?.street;
            tmpUser.email = getByFormAttr('email') || user.email;
            tmpUser.phone = getByFormAttr('phone') || user.phone;
            dispatch(setUser(tmpUser));
        }

        props.afterSave();
    }

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
                            <UserDataTextUsernameInput name="user-name" value={getByFormAttr('user-name') || user?.name} onChange={(e) => handleChange(e)} />
                            <UserDataTextCompanyNameInput name="user-company-name" value={getByFormAttr('user-company-name') || user?.company?.name} onChange={(e) => handleChange(e)} />
                        </DataContentColumn>
                        <ActionBox>
                            <SaveButton onClick={() => saveUserData()}>
                                <FontAwesomeIcon icon={faSave} />
                            </SaveButton>
                        </ActionBox>
                    </DataContentRow>
                    <DataContentRow>
                        <DataContentColumn>
                            <UserDataTextInput name="address-city" value={getByFormAttr('address-city') || user?.address?.city} onChange={(e) => handleChange(e)} />
                            <UserDataTextInput name="address-street" value={getByFormAttr('address-street') || user?.address?.street} onChange={(e) => handleChange(e)} />
                        </DataContentColumn>
                        <DataContentColumn>
                            <UserDataTextInput name="email" value={getByFormAttr('email') || user?.email} onChange={(e) => handleChange(e)} />
                            <UserDataTextInput name="phone" value={getByFormAttr('phone') || user?.phone} onChange={(e) => handleChange(e)} />
                        </DataContentColumn>
                    </DataContentRow>
                </DataContent>
            </UserDataContainer>
        </HeaderContainer>
    );
}

export default HeaderEdit;