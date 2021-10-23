import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Content } from '../Content';
import { Header } from '../Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route />
          <Route />
        </Switch>
      </Content>
    </BrowserRouter>
  );
};

export { App };
