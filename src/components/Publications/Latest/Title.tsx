import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import FontSize from "../../../shared/styleHelpers/FontSizes";

const TextWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const TitleText = styled.span`
    font-weight: 900;
    font-size: ${FontSize[110]};
    color: ${Color.darkGray};
`;

function Title() {
    return (
        <TextWrapper>
            <TitleText>Latest publications</TitleText>
        </TextWrapper>
    );
}

export default Title;
