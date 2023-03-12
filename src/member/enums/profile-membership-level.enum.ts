import { registerEnumType } from '@nestjs/graphql';

export enum ServiceMembershipLevel {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
}

registerEnumType(ServiceMembershipLevel, { name: 'ServiceMembershipLevel' });
