import styled from "styled-components";
import { filter } from "../../../helpers/Filter";
import { Item, Image, Text } from "../../../shared/styleHelpers/components/Dropdown/styles";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

interface IProps {
    filterText: string;
}
function Platform(props: IProps) {

    const items = filter(getItems(), 'text', props.filterText);

    return (
        <ItemsContainer>
            {
                items.map((item, index) => (
                    <Item key={index}>
                        <item.ImageComponent />
                        <Text>{item.text}</Text>
                    </Item>
                ))
            }
        </ItemsContainer>
    );
}

const getItems = () => {

    return [
        {
            url: "#",
            text: "Home",
            ImageComponent: () => <Image src="./img/icons/house2.svg" alt="home" />,
        },
        {
            url: "#",
            text: "Publications",
            ImageComponent: () => <Image src="./img/icons/publications.svg" alt="publications" />,
        },
        {
            url: "#",
            text: "People",
            ImageComponent: () => <Image src="./img/icons/people.svg" alt="people" />,
        },
        {
            url: "#",
            text: "Entities",
            ImageComponent: () => <Image src="./img/icons/entities2.svg" alt="entities" />,
        },
        {
            url: "#",
            text: "Administration",
            ImageComponent: () => <Image src="./img/icons/administration.svg" alt="administration" />,
        },
    ];
}

export default Platform;