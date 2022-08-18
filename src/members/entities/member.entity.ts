import { CoreEntity } from '@/core/entities/core.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Member extends CoreEntity {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Member email' })
  email: string;

  @Field(() => String, { description: 'Member password' })
  password: string;

  @Field(() => String, { description: 'Member username' })
  username: string;
}
