import styled from "styled-components";

export const DefaultActionButton = styled.button`
    border: none;
    background: transparent;
    font-size: 1rem;
    height: max-content;
    padding: 2px;

    &:hover {
        cursor: pointer;
    }
`;

export const EditButton = styled(DefaultActionButton)``;

export const SaveButton = styled(DefaultActionButton)`
    font-size: 1.2rem;
`;

export const CloseButton = styled(DefaultActionButton)`
    font-size: 1.2rem;
`;