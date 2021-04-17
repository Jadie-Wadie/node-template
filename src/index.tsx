// Import
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import './styles/global.scss';

// Root Component
const Root: React.FC = () => {
	const [count, setCount] = useState(0);

	// Interval
	useEffect(() => {
		const interval = setInterval(getPing, 1000);
		return () => clearInterval(interval);
	},[]);

	// Get Ping
	const getPing = async () => {
		setCount((await axios.get('/api/count')).data.count);
	}

	return <p>{'\u2728'} Count: {count}</p>;
}

// Render to DOM
ReactDOM.render(<Root />, document.getElementById('root'));
