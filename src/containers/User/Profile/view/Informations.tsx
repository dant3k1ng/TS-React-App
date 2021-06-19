import { useSelector } from "react-redux";
import { IGlobalState } from "../../../../redux/reducers";
import { HourlyFeeBox, TermsAndConditionsBox, HourlyFeeText, InformationsContainer, Label, TermsAndConditionsText } from "../styles/InformationsStyles";

function Informations() {

    const userDataInformations = useSelector((state: IGlobalState) => state.userData?.informations);

    const hourlyFeeNegociated = userDataInformations?.hourlyFeeNegociated;
    const hourlyFeeText = userDataInformations?.hourlyFee + (hourlyFeeNegociated ? " (Negociated)" : "");
    const termsAndConditions = userDataInformations?.termsAndConditions;

    return (
        <InformationsContainer>
            <HourlyFeeBox>
                <Label>Panel informations</Label>
                <HourlyFeeText>{hourlyFeeText}</HourlyFeeText>
            </HourlyFeeBox>
            <TermsAndConditionsBox>
                <Label>Terms & conditions</Label>
                <TermsAndConditionsText>{termsAndConditions}</TermsAndConditionsText>
            </TermsAndConditionsBox>
        </InformationsContainer>
    );
}

export default Informations;
