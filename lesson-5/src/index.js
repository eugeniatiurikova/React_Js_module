import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  contacts: {
    name: 'John',
    surname: 'Williamson',
    info: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
  },
  isActive: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleActive':
      return { ...state, isActive: !state.isActive };
    default: return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
