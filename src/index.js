import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider>, */}
  </React.StrictMode>,
  document.getElementById('root')
);