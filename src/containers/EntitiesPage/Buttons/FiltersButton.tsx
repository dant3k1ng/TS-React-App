import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

const FiltersButtonWrapper = styled(DefaultActionButton)`
    margin-left: 6px;
`;

const FiltersButton = () => {
    return (
        <FiltersButtonWrapper>
            <FontAwesomeIcon icon={faFilter} />
            Fitlers
        </FiltersButtonWrapper>
    )
}

export default FiltersButton;