import React from 'react';
import { Route } from 'react-router-dom';
import Contacts from './Contacts';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>Главная страница</h1>
				<p>Добро пожаловать на наш сайт!</p>
				<div>
					<Route path="/home/contacts" component={Contacts} />
				</div>
			</div>
		);
	}
}
