import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from "styled-reset";
import styled from "styled-components";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import App from './App';
import { GlobalStyle } from './shared/styleHelpers/GlobalStyle';
import AppReducers from "./redux/reducers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducers, composeEnhancers());

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
    <GlobalStyle/>
    
    <Provider store={store}>
      <AppWrapper>
        <App />
      </AppWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);