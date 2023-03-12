import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { MemberEntity } from 'src/member/entities/member.entity';
import { ServiceMembershipLevel } from 'src/member/enums/profile-membership-level.enum';

@ObjectType()
export class ServiceEntity extends CoreEntity {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  code: string;

  @Field(() => MemberEntity)
  member: MemberEntity;

  @Field(() => ServiceMembershipLevel)
  membershipLevel: ServiceMembershipLevel;
}
