import styled from "styled-components";
import Color from "../styleHelpers/Colors";

const DotBox = styled.span`
    color: ${Color.gray};
    padding: 0 6px;
`;

export const Dot = () => {
    return (
        <DotBox>
            &#x2022;
        </DotBox>
    );
}