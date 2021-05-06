import styled from "styled-components";

const ItemContainer = styled.div`
    box-shadow: 0px 2px 3px 0px #cccccc;
    height: 180px;
    width: 240px;
    margin: 0 12px 0 0;
    background-color: white;
    border-radius: 5px;
`;

function WorkspaceItem() {

    return (
        <ItemContainer>
            WorkspaceItem
        </ItemContainer>
    );
}

export default  WorkspaceItem;