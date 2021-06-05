import { faBars, faCog, faEllipsisH, faShare, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getEntities } from "../../api/Entity";
import EntityMosaic from "../../components/Entity/types/EntityMosaic";
import EntityRow from "../../components/Entity/types/EntityRow";
import { IEntity } from "../../entities/Entity";
import { filter } from "../../helpers/Filter";
import { Sort } from "../../helpers/Sortable";
import SeparateLine from "../../shared/components/SeparateLine";
import { SortButton } from "../../shared/components/Sort";
import { DefaultActionButton } from "../../shared/styleHelpers/components/EditButton";
import MainLayout from "../Layout/MainLayout";
import { EntityViewType } from "./entities/EntityViewType";
import { 
  EntitiesHeader, EntitiesHeaderBottom, EntitiesHeaderTop, EntitiesHeaderTitle, ViewTypeButton, MosaicLayout, RowLayout,
  SearchWrapper, SearchInput, SearchIcon, BottomLeft, BottomRight, ShareText,
} from "./styles/EntitiesPageStyles";

interface IProps {}

interface IState {
  view: EntityViewType;
  entities: IEntity[] | [];
  sort: Sort;
  searchText: string;
}

class EntitiesPage extends React.Component<IProps, IState>
{
  constructor(props: IProps) 
  {
    super(props);

    this.state = {
      view: EntityViewType.Mosaic,
      entities: [],
      sort: Sort.NONE,
      searchText: "",
    };

    this.searchInputChangeHandler = this.searchInputChangeHandler.bind(this);
    this.sortButtonClick = this.sortButtonClick.bind(this);
  }

  async componentDidMount()
  {
    let entities = await getEntities();
    this.setState({entities: entities});
  }

  searchInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>)
  {
    this.setState({searchText: event.target.value});
  }

  sortButtonClick(event: React.MouseEvent<HTMLButtonElement>)
  {
    if(this.state.sort === Sort.NONE) {
      this.setState({sort: Sort.A_TO_Z});
    } else {
      this.setState({sort: (this.state.sort === Sort.A_TO_Z ? Sort.Z_TO_A : Sort.A_TO_Z)});
    }
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
              <BottomLeft>
                All
                <FontAwesomeIcon icon={faEllipsisH}/>
                <SeparateLine/>
                <SortButton onClickHandler={this.sortButtonClick} currentSort={this.state.sort}/>
                Fitlers 
                <SeparateLine/>
                Roz
                <SeparateLine/>
                <FontAwesomeIcon icon={faShare}/>
                <ShareText>Share</ShareText>
              </BottomLeft>
              <BottomRight>
                <SearchWrapper>
                  <SearchInput onChange={this.searchInputChangeHandler} type="text" placeholder="Search..." />
                  <SearchIcon src="img/icons/search.png" />
                </SearchWrapper>
                <SeparateLine/>
                Followed
              </BottomRight>
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
    return currentViewType === layout ? "active" : "";
  }

  getFilteredItems()
  {
    let items = this.state.entities;  
    let searchText = this.state.searchText;

    items = filter(items, 'title', searchText);

    this.sortItems(items);

    return items;
  }

  sortItems(items: IEntity[])
  {
    if(this.state.sort !== Sort.NONE)
    {
      items.sort((a, b) => {
        let titleA = a.title.toLowerCase(), 
            titleB = b.title.toLowerCase();

        if(titleA < titleB) { return this.state.sort === Sort.A_TO_Z ? -1 : 1; }
        if(titleA > titleB) { return this.state.sort === Sort.A_TO_Z ? 1 : -1; }
        return 0;
      })
    }
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
