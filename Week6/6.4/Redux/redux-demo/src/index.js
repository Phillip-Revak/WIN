import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateCounter from './components/StateCounter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxCounter from './components/ReduxCounter';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <StateCounter /> */}
    <ReduxCounter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 1) CREATE YOUR OWN DEFINITION/SUMMARY OF 
//     A) REDUX - Keeps all the states in one place.
//     B) REDUCER function - The reducer is responsible for all of the actions available to change and return the state. It also holds the current state. The function takes in two parameters, state and action. In the reducer function initial state sets the initial state. The other thing you're passing in is an action. The reducer returns a new state.  "(state, action) => newState."
//     C) ACTIONS - a user input. 
//     D) MAPSTATETOPROPS
//     E) DIFFERENCE BETWEEN REDUX ADN REACT-REDUX
//     F) HOW WOULD YOU HAVE IMPLMENTED REDUX INTO YOUR REACT PROJECT?