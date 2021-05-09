import React from "react";
import styled from "styled-components";
import { getPosts, IPost } from "../../api/Post";
import Work from "./elements/Work";

const ItemContainer = styled.div``;

interface IProps{}
interface IState 
{
    data: any
}
export default class Works extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount()
    {
        this.getData();
    }

    getData()
    {
        getPosts()
            .then(response => response.json())
            .then(data => {
                this.setState({data: data});
            });
    }

    render()
    {
        const items: any = [];
        this.state.data.forEach((post: IPost) => {
            items.push(<Work key={post.id} post={post}/>);
        });

        return (
            <ItemContainer>
                {items}
            </ItemContainer>
        );
    }
}