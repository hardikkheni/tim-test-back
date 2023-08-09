import { Request } from 'express';

export * from './contractor.type';

export type MyContext = {
	req: Request;
};
