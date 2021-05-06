import styled from "styled-components";
import WorkspaceItem from "./elements/WorkspaceItem";

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

function Workspaces() {

    return (
        <ItemsContainer>
            <WorkspaceItem/>
            <WorkspaceItem/>
            <WorkspaceItem/>
        </ItemsContainer>
    );
}

export default Workspaces;