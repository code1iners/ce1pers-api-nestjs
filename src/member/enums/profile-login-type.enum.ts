import { registerEnumType } from '@nestjs/graphql';

export enum MemberProfileLoginType {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
  NAVER = 'NAVER',
  KAKAO = 'KAKAO',
  FACEBOOK = 'FACEBOOK',
  APPLE = 'APPLE',
}

registerEnumType(MemberProfileLoginType, { name: 'MemberProfileLoginType' });
