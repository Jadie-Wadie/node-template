import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App: React.FC = () => {
	const [theme, setTheme] = useState('Auto');

	console.log(theme);

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			theme.toLowerCase()
		);
	}, [theme]);

	return (
		<header className='container'>
			<hgroup>
				<h1>React Template</h1>
				<h2>A React + Node JS template.</h2>
			</hgroup>

			<nav>
				<ul>
					<li>Theme:</li>

					<li onClick={() => setTheme('auto')}>
						<a>Auto</a>
					</li>

					<li onClick={() => setTheme('light')}>
						<a>Light</a>
					</li>

					<li onClick={() => setTheme('dark')}>
						<a>Dark</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
