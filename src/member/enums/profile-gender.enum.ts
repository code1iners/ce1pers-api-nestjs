import { registerEnumType } from '@nestjs/graphql';

export enum MemberProfileGender {
  NONE = 'NONE',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

registerEnumType(MemberProfileGender, { name: 'MemberProfileGender' });
