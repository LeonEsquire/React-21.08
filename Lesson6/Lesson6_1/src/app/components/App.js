import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import Main from '../pages/Main';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

export default class App extends React.Component {


  render() {
    return (
      <div>
        <header>Приложение v2</header>
        <ul>
          <li>
            <Link to="/home">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/contacts/get/5">Контакты</Link>
          </li>
        </ul>

        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/home" component={Main} />
            <Route path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route path="/contacts/:action/:number" component={Contacts} />
          </Switch>
        </div>
      </div>
    )
  }

}