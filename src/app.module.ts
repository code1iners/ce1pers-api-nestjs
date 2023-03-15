import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MemberModule } from 'src/member/member.module';
import { JwtModule } from 'src/jwt/jwt.module';
import { AuthModule } from 'src/auth/auth.module';
import { JwtMiddleware } from 'src/jwt/jwt.middleware';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      debug: true,
      playground: true,
      context: ({ req }) => ({
        member: req['member'],
      }),
    }),
    PrismaModule,
    MemberModule,
    JwtModule.forRoot({
      privateKey: process.env.PRIVATE_KEY,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware, JwtMiddleware).forRoutes({
      path: 'graphql',
      method: RequestMethod.POST,
    });
  }
}
