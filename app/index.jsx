import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App.jsx';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import './style.scss';
function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );
};
const store = configureStore({});
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>, document.querySelector('#myApp'));
