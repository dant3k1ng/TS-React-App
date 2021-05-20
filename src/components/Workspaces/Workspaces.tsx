import styled from "styled-components";
import WorkspaceItem from "./elements/WorkspaceItem";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const CustomCarousel = styled(Carousel)`
.BrainhubCarousel__track {
        padding: 10px 0 !important;
    }
`;

function Workspaces() {

    return (
        <ItemsContainer>
            <CustomCarousel itemWidth={250} plugins={[
                'infinite',
                'fastSwipe',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 10
                    }
                },
            ]}>
                <WorkspaceItem />
                <WorkspaceItem />
                <WorkspaceItem />
                <WorkspaceItem />
                <WorkspaceItem />
            </CustomCarousel>
        </ItemsContainer>
    );
}

export default Workspaces;