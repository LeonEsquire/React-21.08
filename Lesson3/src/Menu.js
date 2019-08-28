import React from 'react';

import MenuItem from './MenuItem';


export default class Menu extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href}>
        {item.title}
      </MenuItem>;
    })

    return <div>
      <h1>{this.props.titleMenu}</h1>
      <ul>
        {items}
      </ul>
    </div>
  }
}


/*
this.props = {
  titleMenu: "Основное меню сайта",
  items: [
    { href: "/", title: "Главная" },
    { href: "/about", title: "О нас" },
    { href: "/service", title: "Услуги" },
    { href: "/contacts", title: "Контакты" }
  ]
}

[
  <li key="34"><a href="/">Главная</a></li>,
  <li key="uhatho"><a href="/">Главная</a></li>,
  <li key="unhtoa"><a href="/">Главная</a></li>,
  <li><a href="/">Главная</a></li>
]
*/