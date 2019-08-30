import React from 'react';

export default class DisplayElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  render() {
    let newsBlock;
    if (this.state.display) {
      newsBlock = <div>
        <h3>Новости</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ipsa omnis dolores illo architecto totam quia facilis reprehenderit dicta blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolor.</p>
      </div>;
    }

    return <div>
      <h2 className="link" onClick={() => {
        this.setState({ display: !this.state.display });
      }}>Скрыть/показать блок</h2>
      {newsBlock}
    </div>
  }
}