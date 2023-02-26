import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaModule } from './prisma/prisma.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
    }),
    PrismaModule,
    MemberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
