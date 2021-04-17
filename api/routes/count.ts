// Import
import { Request, Response } from 'express';

// Export
let count = 0;

export default async (_req: Request, res: Response) => {
	res.send({ count: ++count });
}
