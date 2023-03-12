import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export interface ServiceKindObject {
  serviceCode: string;
  serviceName: string;
}

export const ServiceKind = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const graphqlContext = GqlExecutionContext.create(ctx).getContext();
    const serviceCode = graphqlContext.req.headers['service-code'];
    const serviceName = graphqlContext.req.headers['service-name'];

    return {
      ...(serviceCode && { serviceCode }),
      ...(serviceName && { serviceName }),
    };
  },
);
