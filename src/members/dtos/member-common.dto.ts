import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Member } from '@/members/entities/member.entity';

@ObjectType()
export class MemberOutput extends PickType(Member, [
  'id',
  'email',
  'username',
]) {}
