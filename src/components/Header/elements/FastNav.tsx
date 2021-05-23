import styled from "styled-components";

const FastNavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
`;

const ImageHolder = styled.div`
  border-radius: 20px;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const FilledImageHolder = styled(ImageHolder)`
  background-color: #ececec;
  border: 1px solid #e8e8e8;
  position: relative;

  &::after {
    content: '3';
    position: absolute;
    top: -4px;
    right: -6px;
    background-color: #0ca1db;
    font-size: 0.8em;
    color: white;
    padding: 1px 5px;
    border-radius: 12px;
  }
`;

const FastNavImage = styled.img`
  height: max-content;
  width: max-content;
`;

function FastNav() {
  return (
    <FastNavWrapper>
      <ImageHolder>
        <FastNavImage src="img/icons/house.png" />
      </ImageHolder>
      <FilledImageHolder>
        <FastNavImage src="img/icons/comments.png" />
      </FilledImageHolder>
      <FilledImageHolder>
        <FastNavImage src="img/icons/bell.png" />
      </FilledImageHolder>

    </FastNavWrapper>
  );
}

export default FastNav;
