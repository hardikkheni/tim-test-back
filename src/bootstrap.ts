import {
	ApolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import Container from 'typedi';
import cors from 'cors';
import { resolvers } from './gql/resolvers';
import { MyContext } from './gql/types';
import { PrismaService } from './services';

export default async () => {
	const app = express();

	app.use(
		cors({
			credentials: true,
			origin: '*',
		})
	);

	app.set('trust proxy', 1);

	const prisma = Container.get(PrismaService);
	await prisma.$connect();

	const schema = await buildSchema({
		resolvers: resolvers,
		container: Container,
		validate: false,
	});

	const server = new ApolloServer({
		schema,
		context: ({ req }: MyContext) => ({ req }),
		plugins: [
			process.env.NODE_ENV === 'production'
				? ApolloServerPluginLandingPageProductionDefault()
				: ApolloServerPluginLandingPageGraphQLPlayground(),
		],
	});

	await server.start();
	server.applyMiddleware({ app });

	app.get('/', (_, res) => {
		return res.json({
			status: 200,
			message: `Server is up and running at http://localhost:3000`,
		});
	});

	return app;
};
