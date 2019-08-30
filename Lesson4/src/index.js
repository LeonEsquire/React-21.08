import React from 'react';
import ReactDOM from 'react-dom';

// import LifeCycleMount from './app/components/LifeCycleMount';
// import LifeCycleUpdate from './app/components/LifeCycleUpdate';
import LifeCycleUnmount from './app/components/LifeCycleUnmount';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		}
	}

	render() {
		return (
			<div>
				{this.state.display ? <LifeCycleUnmount /> : null}
				<button onClick={() => {
					this.setState({ display: false })
				}}>Демонтировать компонент</button>
			</div>
		);
	}
}

ReactDOM.render(<App />,
	document.getElementById('root'));



















	// import './app/styles/style.css';

// import DisplayElement from './app/components/DisplayElement';
// import Users from './app/components/Users';

// const USERS = ['Anna', 'Olga', 'Victor', 'Anton'];