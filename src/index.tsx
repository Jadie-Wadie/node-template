// Import
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import './styles/global.scss';

// Root Component
const Root: React.FC = () => {
	const [colour, setColour] = useState<string>('transparent');

	useEffect(() => {
		axios.get('/api/colour')
			.then(res => setColour(res.data.colour))
			.catch(console.error);
	}, []);

	return <p style={{ color: colour }}>Hello!</p>;
}

// Render to DOM
ReactDOM.render(<Root />, document.getElementById('root'));
