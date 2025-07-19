//  import { StrictMode } from 'react'
//  import { createRoot } from 'react-dom/client'
// import App from './App'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import * as React from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


 
