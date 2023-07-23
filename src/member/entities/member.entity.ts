import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { ProfileEntity } from 'src/member/entities/profile.entity';

@ObjectType()
export class MemberEntity extends CoreEntity {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => ProfileEntity, { nullable: true })
  profile: ProfileEntity;
}
