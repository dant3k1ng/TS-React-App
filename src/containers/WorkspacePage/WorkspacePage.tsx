import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWorkspace } from "../../api/Workspace";
import Works from "../../components/Works/Works";
import { IWorkspace } from "../../entities/Workspace";
import MainLayout from "../Layout/MainLayout";
import Header from "./elements/Header";
import Info from "./elements/Info";

interface IRouteParams {
  id: string;
}

function WorkspacePage() {

  const [workspace, setWorkspace] = useState<IWorkspace|null>(null);
  const params = useParams<IRouteParams>();
  
  useEffect(() => {
    getWorkspace(Number(params.id))
      .then(data => setWorkspace(data))
  }, [params.id])

  return (
    <MainLayout>
      <>
        <Header workspace={workspace}/>
        <Info/>
        <Works filterText=""/>
      </>
    </MainLayout>
  )
}

export default WorkspacePage;
