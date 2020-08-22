import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Home from './pages/home';
import MovieDetail from './pages/movie-detail';
import reducers from './stores/rootReducer';
import './styles/index.scss';

const store = createStore(reducers, composeWithDevTools());
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id" children={<MovieDetail />} />
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
