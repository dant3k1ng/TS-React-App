import styled from "styled-components";
import { filter } from "../../../helpers/Filter";
import { Item, Image, Text } from "../../../shared/styleHelpers/components/Dropdown/styles";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

interface IProps {
    filterText: string;
}

function Workspaces(props: IProps) {
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
            text: "Client contract",
            ImageComponent: () => <Image src="./img/icons/entities2.svg" alt="client contract" />,
        },
        {
            url: "#",
            text: "Supplier contract",
            ImageComponent: () => <Image src="./img/icons/entities2.svg" alt="supplier contract" />,
        },
        {
            url: "#",
            text: "Corporate",
            ImageComponent: () => <Image src="./img/icons/entities2.svg" alt="corporate" />,
        },
        {
            url: "#",
            text: "Group Norms",
            ImageComponent: () => <Image src="./img/icons/entities2.svg" alt="group norms" />,
        },
        {
            url: "#",
            text: "Real estate contracts",
            ImageComponent: () => <Image src="./img/icons/entities2.svg" alt="real estate contracts" />,
        },
    ];
}

export default Workspaces;