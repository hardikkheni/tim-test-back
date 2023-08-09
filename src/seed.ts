import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.$connect();
	const contractors = [
		{
			dayRate: 30000,
			fullname: 'Strykes',
			availablity: true,
			specialities: ['Surgery', 'Medical'],
		},
		{
			dayRate: 25000,
			fullname: 'Rossonerri',
			availablity: false,
			specialities: ['Healthcare', 'Fitness'],
		},
		{
			dayRate: 19900,
			fullname: 'Tyga',
			availablity: false,
			specialities: ['Surgery', 'Medical'],
		},
		{
			dayRate: 20000,
			fullname: 'Yolo.corp',
			availablity: true,
			specialities: ['Automotive', 'Modification'],
		},
		{
			dayRate: 10000,
			fullname: 'Bardi',
			availablity: true,
			specialities: [
				'Technology',
				'Home Living',
				'test1',
				'test2',
				'test3',
				'test4',
			],
		},
	];
	await prisma.contractor.createMany({ data: contractors });
}

main().finally(async () => {
	await prisma.$disconnect();
});
