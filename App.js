import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainContainer from './components/MainContainer';

const reducer = (state, action) => state; // For now untill reducers are made

function configureStore(initialState) {
  return createStore(reducer, , initialState);
}

const store = configureStore({});

export default class App extends React.Component {
  render() {
    return (
			<Provider store={store}>
        <MainContainer />
			</Provider>
    );
  }
}
