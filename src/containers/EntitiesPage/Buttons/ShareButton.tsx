import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";
import { ShareText } from "../styles/EntitiesPageStyles";

const ShareButton = () => {
    return (
        <DefaultActionButton>
            <FontAwesomeIcon icon={faShare}/>
            <ShareText>Share</ShareText>
        </DefaultActionButton>
    )
}

export default ShareButton;