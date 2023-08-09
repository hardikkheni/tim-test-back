import { Arg, Query, Resolver } from 'type-graphql';
import { ContracterOrderInput, Contractor } from '../types';
import { Inject, Service } from 'typedi';
import { ContractorService } from '../../services';

@Service()
@Resolver(Contractor)
export default class ContractorResolver {
	@Inject()
	readonly contractorService!: ContractorService;

	@Query((_) => [Contractor])
	contractors(
		@Arg('search', { nullable: true }) search?: string,
		@Arg('order', { nullable: true }) order?: ContracterOrderInput
	): Promise<Contractor[]> {
		return this.contractorService.findMany(search, order);
	}
}
