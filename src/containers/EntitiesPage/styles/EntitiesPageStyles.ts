import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/EditButton";

export const EntitiesHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EntitiesHeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const EntitiesHeaderTitle = styled.span`
    padding: 0 2px;
    margin-right: 4px;
`;

export const EntitiesHeaderBottom = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ViewTypeButton = styled(DefaultActionButton)`
    padding: 8px 10px;
    font-size: 0.86rem;
    font-weight: 900;
    color: ${Color.blue};
    border-radius: 2px;

    &.active {
        background-color: #EAECF5;
    }

    span {
        padding-left: 3px;
    }
`;

export const MosaicLayout = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) ;
  grid-gap: 10px;
  margin: 5px 0;
`;

export const RowLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;