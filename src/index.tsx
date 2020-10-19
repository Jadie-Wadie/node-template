import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App: React.FC = () => {
	return (
		<hgroup>
			<h1>Node Template</h1>
			<h3>
				{'A template for '}
				<a href='https://nodejs.org/'>NodeJS</a> projects.
			</h3>
		</hgroup>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
