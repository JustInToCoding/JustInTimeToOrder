import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import MainContainer from './components/MainContainer';
import { fetchProductsSaga } from './utilities/Saga';
import { productsReducer } from './utilities/Reducers'

const reducer = productsReducer;
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const enhancer = applyMiddleware(sagaMiddleware);
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

sagaMiddleware.run(fetchProductsSaga);

export default class App extends React.Component {
  render() {
    return (
			<Provider store={store}>
        <MainContainer />
			</Provider>
    );
  }
}
