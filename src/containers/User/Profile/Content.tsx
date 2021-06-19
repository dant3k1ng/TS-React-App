import Fees from "./view/Fees";
import Header from "./view/Header";
import HeaderEdit from "./edit/HeaderEdit";
import Informations from "./view/Informations";
import InternalReviews from "./view/InternalReviews";
import Proposals from "./view/Proposals";
import Services from "./view/Services";
import General from "./view/General";
import { EditButton, SaveButton } from "../../../shared/styleHelpers/components/ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import GeneralEdit from "./edit/GeneralEdit";
import SpaceLine from "../../../shared/components/SpaceLine";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState } from "../../../redux/reducers";
import { setUserData } from "../../../redux/actions/UserDataAction";
import { Information, ItemKeyValue } from "../../../entities/UserData";
import { useEffect } from "react";
import ServicesEdit from "./edit/ServicesEdit";
import InformationsEdit from "./edit/InformationsEdit";

const NavGeneralInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 24px;
`;

function Content() {
    const dispatch = useDispatch();
    const userData = useSelector((state: IGlobalState) => state.userData);
    //
    const [editModeProfileInformation, setEditModeProfileInformation] = useState(false);
    const [editMode, setEditMode] = useState(false);
    //
    const globalExpertises = useSelector((state: IGlobalState) => state.userData?.expertise)
    const globalAdmission = useSelector((state: IGlobalState) => state.userData?.admission)
    const globalCounties = useSelector((state: IGlobalState) => state.userData?.counties)
    const globalSpecialties = useSelector((state: IGlobalState) => state.userData?.specialties)
    const globalInformations = useSelector((state: IGlobalState) => state.userData?.informations)
    const globalServices = useSelector((state: IGlobalState) => state.userData?.services)

    const [expertises, setExpertises] = useState<ItemKeyValue>({});
    const [specialties, setSpecialties] = useState<ItemKeyValue>({});
    const [admissions, setAdmissions] = useState<ItemKeyValue>({});
    const [counties, setCounties] = useState<ItemKeyValue>({});
    const [informations, setInformations] = useState<Information>({});
    const [services, setServices] = useState<ItemKeyValue>({});

    //

    useEffect(() => {
        if (globalExpertises !== null && globalExpertises !== undefined) {
            setExpertises(globalExpertises);
        }
    }, [globalExpertises])

    useEffect(() => {
        if (globalAdmission !== null && globalAdmission !== undefined) {
            setAdmissions(globalAdmission);
        }
    }, [globalAdmission])

    useEffect(() => {
        if (globalCounties !== null && globalCounties !== undefined) {
            setCounties(globalCounties);
        }
    }, [globalCounties])

    useEffect(() => {
        if (globalSpecialties !== null && globalSpecialties !== undefined) {
            setSpecialties(globalSpecialties);
        }
    }, [globalSpecialties])

    useEffect(() => {
        if (globalInformations !== null && globalInformations !== undefined) {
            setInformations(globalInformations);
        }
    }, [globalInformations])

    useEffect(() => {
        if (globalServices !== null && globalServices !== undefined) {
            setServices(globalServices);
        }
    }, [globalServices])

    //

    const saveUserDataAndClose = () => {
        if (userData !== null) {
            dispatch(setUserData({
                expertise: expertises,
                specialties: specialties,
                admission: admissions,
                counties: counties,
                informations: informations,
                services: services
            }));
        }

        setEditMode(false);
    }

    //

    return (
        <>
            {
                editModeProfileInformation ? (
                    <HeaderEdit afterSave={() => setEditModeProfileInformation(false)} />
                ) : (
                    <Header setEditMode={() => setEditModeProfileInformation(true)} />
                )
            }
            <SpaceLine />
            {
                <NavGeneralInfo>
                    {
                        editMode
                            ? (
                                <>
                                    <SaveButton onClick={() => saveUserDataAndClose()}><FontAwesomeIcon icon={faSave} /></SaveButton>
                                    <SaveButton onClick={() => setEditMode(false)}><FontAwesomeIcon icon={faTimes} /></SaveButton>
                                </>
                            )
                            : <EditButton onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faPen} /></EditButton>
                    }
                </NavGeneralInfo>

            }
            {
                editMode ? (
                    <>
                        <>
                            <GeneralEdit title="Expertise" items={expertises} onChange={setExpertises} />
                            <GeneralEdit title="Specialties" items={specialties} onChange={setSpecialties} />
                            <GeneralEdit title="Admission to practice law" items={admissions} onChange={setAdmissions} />
                            <GeneralEdit title="Counties" items={counties} onChange={setCounties} />
                        </>
                        <SpaceLine />
                        <InformationsEdit informations={informations} onChange={setInformations} />
                        <ServicesEdit items={services} onChange={setServices} />
                        <Proposals />
                        <InternalReviews />
                        <Fees />
                    </>
                ) : (
                    <>
                        <General />
                        <SpaceLine />
                        <Informations />
                        <Services />
                        <Proposals />
                        <InternalReviews />
                        <Fees />
                    </>
                )
            }
        </>
    );
}

export default Content;