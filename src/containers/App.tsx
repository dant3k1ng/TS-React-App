import { Reset } from "styled-reset";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import AppReducers from "../redux/reducers";
import { GlobalStyle } from '../shared/styleHelpers/GlobalStyle';
import AppRouter from "./Router/AppRouter";
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducers, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      {/* <Reset /> */}
      <GlobalStyle />
      <div>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App;