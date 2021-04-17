// Import
import { Request, Response } from 'express';

// Export
export default async (_req: Request, res: Response) => {
	res.send('Pong!');
}
