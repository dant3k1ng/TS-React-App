import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWorkspace } from "../../api/Workspace";
import Works from "../../components/Works/Works";
import { IWorkspace } from "../../entities/Workspace";
import SearchInput from "../../shared/components/SearchInput";
import MainLayout from "../Layout/MainLayout";
import All from "./buttons/All";
import Communities from "./buttons/Communities";
import More from "./buttons/More";
import Poa from "./buttons/Poa";
import Sarl from "./buttons/Sarl";
import Sas from "./buttons/Sas";
import SecondaryBusiness from "./buttons/SecondaryBusiness";
import Survey from "./buttons/Survey";
import Header from "./elements/Header";
import Info from "./elements/Info";
import { 
  ButtonContainer, CommentsContainerHeader, CommentsContainerHeaderTop, CommentsContainerHeaderTopLeft, CommentsContainerHeaderTopRight,
  CommentsContainerHeaderTitle,
} from "./styles/WorkspacePageStyles";

interface IRouteParams {
  id: string;
}

function WorkspacePage() {

  const params = useParams<IRouteParams>();
  const [inputText, setInputText] = useState("");
  const [workspace, setWorkspace] = useState<IWorkspace|null>(null);
  
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }
  
  useEffect(() => {
    getWorkspace(Number(params.id))
      .then(data => setWorkspace(data))
  }, [params.id])

  return (
    <MainLayout>
      <>
        <Header workspace={workspace}/>
        <Info/>
        <CommentsContainerHeader>
          <CommentsContainerHeaderTop>
            <CommentsContainerHeaderTopLeft>
              <CommentsContainerHeaderTitle>Latest updates</CommentsContainerHeaderTitle>
            </CommentsContainerHeaderTopLeft>
            <CommentsContainerHeaderTopRight>
              <SearchInput inputChangeHandler={inputChangeHandler} placeholder="Filter by title..."/>
            </CommentsContainerHeaderTopRight>
          </CommentsContainerHeaderTop>
          <ButtonContainer>
            <All/>
            <Sas/>
            <Sarl/>
            <SecondaryBusiness/>
            <Communities/>
            <Poa/>
            <Survey/>
            <More/>
          </ButtonContainer>
        </CommentsContainerHeader>
        <Works filterText={inputText}/>
      </>
    </MainLayout>
  )
}

export default WorkspacePage;
