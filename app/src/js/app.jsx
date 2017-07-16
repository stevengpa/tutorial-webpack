import React from 'react';
import { render } from 'react-dom';
import '../style/index.scss';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

class Demo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>HI WORLD</h1>
				<ComponentA />
				<ComponentB />
			</div>
		);
	}
}

render(<Demo />, document.getElementById('app'));
