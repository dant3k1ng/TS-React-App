import { faBars, faCog, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getEntities } from "../../api/Entity";
import EntityMosaic from "../../components/Entity/types/EntityMosaic";
import EntityRow from "../../components/Entity/types/EntityRow";
import { IEntity } from "../../entities/Entity";
import { DefaultActionButton } from "../../shared/styleHelpers/components/EditButton";
import MainLayout from "../Layout/MainLayout";
import { EntityViewType } from "./entities/EntityViewType";
import { EntitiesHeader, EntitiesHeaderBottom, EntitiesHeaderTop, EntitiesHeaderTitle, ViewTypeButton, MosaicLayout, RowLayout } from "./styles/EntitiesPageStyles";

interface IProps {}

interface IState {
  view: EntityViewType,
  entities: IEntity[] | [],
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
    return (
      <MainLayout>
        <>
          <EntitiesHeader>
            <EntitiesHeaderTop>
              <div>
                <EntitiesHeaderTitle>Entities</EntitiesHeaderTitle>
                <DefaultActionButton><FontAwesomeIcon icon={faCog}/></DefaultActionButton>
              </div>
              <div>
                <ViewTypeButton className={this.currentViewTypeButtonClassHelper(EntityViewType.Mosaic)} onClick={() => this.changeLayout(EntityViewType.Mosaic)}>
                  <FontAwesomeIcon icon={faThLarge}/>
                  {this.state.view === EntityViewType.Mosaic ? <span>Mosaic</span> : null}
                </ViewTypeButton>
                <ViewTypeButton className={this.currentViewTypeButtonClassHelper(EntityViewType.Row)} onClick={() => this.changeLayout(EntityViewType.Row)}>
                  <FontAwesomeIcon icon={faBars}/>
                  {this.state.view === EntityViewType.Row ? <span>Row</span> : null}
                </ViewTypeButton>
              </div>
            </EntitiesHeaderTop>
            <EntitiesHeaderBottom>
              Bottom
            </EntitiesHeaderBottom>
          </EntitiesHeader>
          <>
            {this.contentByLayout()}
          </>
        </>
      </MainLayout>
    );
  }

  currentViewTypeButtonClassHelper(layout: EntityViewType)
  {
    const currentViewType = this.state.view;
    return currentViewType == layout ? "active" : "";
  }

  getFilteredItems()
  {
    return this.state.entities;;
  }

  contentByLayout()
  {
    const entities = this.getFilteredItems();

    let itemsToShow: JSX.Element[] = [];

    switch (this.state.view) {
      case EntityViewType.Row:
        entities.forEach((element, index) => {
          itemsToShow.push(<EntityRow key={index} entity={element}/>);
        });

        return (
          <RowLayout>
            {itemsToShow}
          </RowLayout>
        );
      default:
        entities.forEach((element, index) => {
          itemsToShow.push(<EntityMosaic key={index} entity={element}/>);
        });

        return (
          <MosaicLayout>
            {itemsToShow}
          </MosaicLayout>
        );
    }
  }

  changeLayout(layout: EntityViewType)
  {
    this.setState({view: layout});
  }
}

export default EntitiesPage;
