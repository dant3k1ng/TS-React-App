import styled from "styled-components";
import Color from "../../../../shared/styleHelpers/Colors";

export const HeaderContainer = styled.div`
    width: 100%;
`;

export const HeaderTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const HeaderTopButton = styled.button`
    background: transparent;
    border: none;
    padding: 2px 6px;
    font-weight: 900;

    &:hover {
        cursor: pointer;
    }
`;

export const UserDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px 0;
`;

export const DataContent = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 110px);
`;

export const DataContentRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DataContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const ActionBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

export const UserAvatarBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
    width: 100px;
`;

export const UserAvatar = styled.img`
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 100%;
`;

export const SeeProfileButton = styled.button`
    color: ${Color.blue};
    background: transparent;
    border: none;
    padding: 4px;
    font-weight: 900;
`;

export const UserDataText = styled.span`
    font-size: 1.02em;
    padding: 1px 0;
`;

export const Username = styled(UserDataText)`
    font-weight: 900;
`;

export const CompanyName = styled(UserDataText)`
    font-weight: 900;
`;

export const CityName = styled(UserDataText)``;

export const StreetName = styled(UserDataText)``;

export const UserEmail = styled(UserDataText)``;

export const UserPhone = styled(UserDataText)``;