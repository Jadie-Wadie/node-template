// Import
import { Request, Response } from 'express';

// Lib
import getRandom from '../lib/getRandom';

// Export
export default async (_req: Request, res: Response) => {
	// List of Colours
	const colours = [
		'#FF4136',
		'#FF851B',
		'#FFDC00',
		'#2ECC40',
		'#0074D9',
		'#F012BE',
		'#B10DC9'
	];

	// Send Response
	res.send({ colour: colours[getRandom(0, colours.length)] });
}
