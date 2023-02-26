import { ObjectType, OmitType } from '@nestjs/graphql';
import { MemberEntity } from 'src/member/entities/member.entity';

@ObjectType()
export class MemberWithoutPassword extends OmitType(MemberEntity, [
  'password',
] as const) {}
