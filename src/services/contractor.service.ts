import { Inject, Service } from 'typedi';
import PrismaService from './prisma.service';
import { ContracterOrderInput, Contractor } from '../gql/types';

@Service()
export default class ContractorService {
	@Inject()
	readonly prisma!: PrismaService;

	findMany(
		search?: string,
		order?: ContracterOrderInput
	): Promise<Contractor[]> {
		return this.prisma.contractor.findMany({
			...(search
				? {
						where: {
							OR: [
								{
									fullname: {
										contains: search,
										mode: 'insensitive',
									},
								},
								{
									specialities: {
										has: search,
									},
								},
							],
						},
				  }
				: {}),
			...(order
				? {
						orderBy: {
							[order.field]: order.dir,
						},
				  }
				: {}),
		});
	}
}
