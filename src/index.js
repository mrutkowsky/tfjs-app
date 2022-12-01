import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import preset from "@rebass/preset";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={preset}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
