import { Service } from 'typedi';
import { PrismaClient } from '@prisma/client';

@Service()
export default class PrismaService extends PrismaClient {
	constructor() {
		super();
	}
}
