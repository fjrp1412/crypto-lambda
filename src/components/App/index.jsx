import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../../containers/Home';
import { CardDetail } from '../../containers/CoinDetail';
import { Content } from '../Content';
import { Header } from '../Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={CardDetail} />
          <Route />
        </Switch>
      </Content>
    </BrowserRouter>
  );
};

export { App };
