import React from "react";
import styled from "styled-components";
import { getEntities } from "../../api/Entity";
import EntityMosaic from "../../components/Entity/types/EntityMosaic";
import { IEntity } from "../../entities/Entity";
import MainLayout from "../Layout/MainLayout";

const MosaicLayout = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) ;
  grid-gap: 10px;
`;

interface IProps {}

interface IState {
  view: EntityViewType,
  entities: IEntity[] | [],
}

export enum EntityViewType {
  Mosaic,
  Row,
}

class EntitiesPage extends React.Component<IProps, IState>
{
  constructor(props: IProps) 
  {
    super(props);

    this.state = {
      view: EntityViewType.Mosaic,
      entities: [],
    };
  }

  async componentDidMount()
  {
    let entities = await getEntities();
    this.setState({entities: entities});
  }

  render() 
  {
    const entities = this.state.entities;

    let itemsToShow: JSX.Element[] = [];
    entities.forEach((element, index) => {
      itemsToShow.push(<EntityMosaic key={index} entity={element}/>);
    });

    return (
      <MainLayout>
        <MosaicLayout>
          {itemsToShow}
        </MosaicLayout>
      </MainLayout>
    )
  }
}

export default EntitiesPage;
