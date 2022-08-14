import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { MembersModule } from '@/members/members.module';
import { CoreModule } from '@/core/core.module';
import { RepositoriesModule } from '@/repositories/repositories.module';
import { EnvKeys } from '@/core/constants/env-keys';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === EnvKeys.Production
          ? EnvKeys.ProductionEnvFile
          : EnvKeys.DevelopmentEnvFile,
      ignoreEnvFile: process.env.NODE_ENV === EnvKeys.Production,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(EnvKeys.Production, EnvKeys.Development)
          .required(),
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
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
