import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MembersModule } from './members/members.module';
import { CoreModule } from './core/core.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MembersModule,
    CoreModule,
    RepositoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
