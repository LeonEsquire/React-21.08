import React from 'react';
import ReactDOM from 'react-dom';
import CreateReactClass from 'create-react-class';

React.createClass = CreateReactClass;

const App = React.createClass({
  render() {
    return <div>Синтаксис 2</div>
  }
});

ReactDOM.render(<App />, document.querySelector('#root'));