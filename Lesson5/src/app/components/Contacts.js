import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Контакты</h1>
        <p>Email: 1@2.ru</p>
        <p>Phone: +79999999999</p>
        <p>Номер офиса: {this.props.params.number}</p>
      </div>
    )
  }
}
