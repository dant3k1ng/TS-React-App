import { GetLoggedUser } from "../../helpers/User";
import MainLayout from "../Layout/MainLayout";
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
      <>
        <Header user={user}/>
        <Informations/>
        <Services/>
        <Proposals/>
        <InternalReviews/>
        <Fees/>
      </>
    </MainLayout>
  )
}

export default ProfilePage;
