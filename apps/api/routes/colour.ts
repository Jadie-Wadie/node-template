// Import
import { Request, Response } from 'express';

// Lib
import getRandom from '@shared/getRandom';
import colours from '@shared/colours';

// Export
export default async (_req: Request, res: Response) => {
	res.send(colours[getRandom(0, colours.length)]);
}
