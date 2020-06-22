import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import store from "./store/store";
import { Provider} from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
