import React from "react";
import Fees from "./view/Fees";
import Header from "./view/Header";
import HeaderEdit from "./edit/HeaderEdit";
import Informations from "./view/Informations";
import InternalReviews from "./view/InternalReviews";
import Proposals from "./view/Proposals";
import Services from "./view/Services";

interface IProps { }

interface IState {
    editModeProfileInformation: boolean;
    editMode: boolean;
}

class Content extends React.Component<IProps, IState>
{
    constructor(props: IProps) {
        super(props);

        this.state = {
            editModeProfileInformation: false,
            editMode: false,
        };

        this.editModeProfileInformation = this.editModeProfileInformation.bind(this);
    }

    editModeProfileInformation(edit: boolean) {
        this.setState({ editModeProfileInformation: edit });
    }

    render() {
        return (
            <>
                {
                    this.state.editModeProfileInformation ? (
                        <HeaderEdit afterSave={() => this.editModeProfileInformation(false)} />
                    ) : (
                        <Header setEditMode={() => this.editModeProfileInformation(true)} />
                    )
                }
                {
                    this.state.editMode ? (
                        <>

                            <Informations />
                            <Services />
                            <Proposals />
                            <InternalReviews />
                            <Fees />
                        </>
                    ) : (
                        <>

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
}

export default Content;
