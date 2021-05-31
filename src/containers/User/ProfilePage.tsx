import React from "react";
import { GetLoggedUser } from "../../helpers/User";
import MainLayout, { ContentWrapper } from "../Layout/MainLayout";
import Fees from "./Profile/Fees";
import Header from "./Profile/Header";
import Informations from "./Profile/Informations";
import InternalReviews from "./Profile/InternalReviews";
import Proposals from "./Profile/Proposals";
import Services from "./Profile/Services";

const ProfilePage = () => {

  const user = GetLoggedUser();

  return (
    <MainLayout>
      <ContentWrapper>
        <Header user={user}/>
        <Informations/>
        <Services/>
        <Proposals/>
        <InternalReviews/>
        <Fees/>
      </ContentWrapper>
    </MainLayout>
  )
}

export default ProfilePage;
