import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Elements from "./Elements";

const SidebarWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    padding: 0 32px;
`;

export default function Sidebar() 
{
    return (
        <SidebarWrapper>
            <ProfileCard/>
            <br/>
            <Elements/>
        </SidebarWrapper>
    );
}