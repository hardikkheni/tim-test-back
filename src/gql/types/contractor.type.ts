import {
	Field,
	GraphQLISODateTime,
	InputType,
	Int,
	ObjectType,
	registerEnumType,
} from 'type-graphql';

@ObjectType()
export class Contractor {
	@Field((_) => Int)
	id!: number;

	@Field()
	fullname!: string;

	@Field(() => [String])
	specialities!: string[];

	@Field(() => Int)
	dayRate!: number;

	@Field(() => Boolean)
	availablity!: boolean;

	@Field(() => GraphQLISODateTime, { nullable: true })
	createdAt?: Date;

	@Field(() => GraphQLISODateTime, { nullable: true })
	updatedAt?: Date;
}

export enum OrderDir {
	asc = 'asc',
	desc = 'desc',
}

registerEnumType(OrderDir, {
	name: 'OrderDir', // This is the name of the enum in the GraphQL schema
});

export type OrderField =
	| 'availablity'
	| 'createdAt'
	| 'dayRate'
	| 'fullname'
	| 'id'
	| 'specialities'
	| 'updatedAt';

@InputType()
export class ContracterOrderInput {
	@Field()
	dir!: OrderDir;

	@Field()
	field!: OrderField;
}
