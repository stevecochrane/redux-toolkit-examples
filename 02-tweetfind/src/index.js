import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();
