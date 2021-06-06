import React from "react";
import styled from "styled-components";
import { getPosts } from "../../api/Post";
import Work from "./elements/Work";
import ReactPaginate from 'react-paginate';
import Color from "../../shared/styleHelpers/Colors";
import { filter } from "../../helpers/Filter";
import { IPost } from "../../entities/Post";

const Container = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        margin: 5px 0 25px 0;
        padding: 4px 0;
        user-select: none;
    }

    .pagination ul {
        display: inline-block;
        padding-left: 15px;
        padding-right: 15px;
    }

    .pagination li {
        display: inline-block;
        margin: 0 2px;
        text-align: center;
        color: ${Color.paginationBlue};
        font-weight: 900;

        a {
            padding: 5px;
        }

        &:hover {
            cursor: pointer;
        }
    }

    .pagination li.active {
        font-weight: 900;
        color: black;
    }
`;
const ItemContainer = styled.div``;
const WorksPagination = styled(ReactPaginate)``;

interface IProps {
    filterText: string;
}

interface IState {
    data: any;
    perPage: number;
    offset: number;
}

export default class Works extends React.Component<IProps, IState>
{
    constructor(props: IProps) {
        super(props);

        this.state = {
            data: [],
            perPage: 10,
            offset: 0,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        getPosts()
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data });
            });
    }

    render() {
        const items: any = [];
        const filteredItems = filter(this.state.data, 'title', this.props.filterText);
        const itemsPerPage = this.state.perPage;
        const offset = this.state.offset;
        const total = filteredItems.length;
        const pageCount = Math.ceil(total / itemsPerPage);

        let handlePageClick = (data: any) => {
            let selected = data.selected;
            let offsetToSet = Math.ceil(selected * itemsPerPage);
            this.setState({ offset: offsetToSet });
        };

        const itemsToTake = filteredItems.slice(offset, itemsPerPage + offset);
        itemsToTake.forEach((post: IPost) => {
            items.push(<Work key={post.id} post={post} />);
        });

        return (
            <Container>
                <ItemContainer>
                    {items}
                </ItemContainer>
                <WorksPagination
                    previousLabel={'PREVIOUS'}
                    nextLabel={'NEXT'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </Container>
        );
    }
}