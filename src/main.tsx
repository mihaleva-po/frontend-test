import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  LIGHT_THEME,
} from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
