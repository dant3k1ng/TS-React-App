import React from "react";
import styled from "styled-components";
import Color from "../../styledHelpers/Colors";
import { getUser } from "../../../api/User";
import Footer from "./ProfileCard/Footer";
import Info from "./ProfileCard/Info";

const Card = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 2px 3px 0px #cccccc;
    padding: 12px 0;
`;

const Space = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e9e9e9;
    margin: 10px 0;
`;

interface IProps {}
interface IState {
    data: any
}
export default class ProfileCard extends React.Component<IProps, IState>
{
    constructor(props: IProps) 
    {
        super(props);
     
        this.state = {
            data: null,
        };
    }

    componentDidMount()
    {
        getUser()
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render()
    {
        return (
            <Card>
                <Info data={this.state.data}/>
                <Space />
                <Footer/>
            </Card>
        );
    }
}