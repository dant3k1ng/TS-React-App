import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reset } from "styled-reset";
import styled from "styled-components";

const AppWrapper = styled.div`
  @font-face {
    font-family: 'AppFont';
    src: url(${"./fonts/Open_Sans/OpenSans-Light.ttf"});
  }

  font-family: AppFont;
  * {
    box-sizing: border-box;
  }

  input, button, select, textarea, optgroup, option {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);