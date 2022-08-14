import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Member {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Member email' })
  email: string;

  @Field(() => String, { description: 'Member password' })
  password: string;

  @Field(() => String, { description: 'Member username' })
  username: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
