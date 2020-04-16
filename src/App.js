import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Board from './components/board';
import List from './components/list';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Board} />
          <Route path="/list/:id" component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
