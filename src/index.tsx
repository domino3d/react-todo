// import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // react 18 way
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');  // react 18 way
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);