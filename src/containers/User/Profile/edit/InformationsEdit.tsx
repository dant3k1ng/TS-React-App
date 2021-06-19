import { Information } from "../../../../entities/UserData";
import {
    HourlyFeeBox, TermsAndConditionsBox, HourlyFeeCheckboxInput, InformationsContainer, Label,
    HourlyFeeInput, TermsAndConditionsText
} from "../styles/InformationsStyles";

interface IProps {
    informations: Information,
    onChange: (informations: Information) => void
}

function InformationsEdit(props: IProps) {

    const onHourlyFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let current = props.informations;
        current.hourlyFee = event.target.value;
        props.onChange(current);
    }

    const onHourlyFeeNegociatedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let current = props.informations;
        current.hourlyFeeNegociated = event.target.checked;
        props.onChange(current);
    }

    return (
        <InformationsContainer>
            <HourlyFeeBox>
                <Label>Panel informations</Label>
                <HourlyFeeInput value={props.informations?.hourlyFee} onChange={(e) => onHourlyFeeChange(e)} />
                <label htmlFor="negociated">Negociated</label>
                <HourlyFeeCheckboxInput type="checkbox" id="negociated" defaultChecked={props.informations?.hourlyFeeNegociated === true} onChange={(e) => onHourlyFeeNegociatedChange(e)} />
            </HourlyFeeBox>
            <TermsAndConditionsBox>
                <Label>Terms & conditions</Label>
                <TermsAndConditionsText>TODO</TermsAndConditionsText>
            </TermsAndConditionsBox>
        </InformationsContainer>
    );
}

export default InformationsEdit;
