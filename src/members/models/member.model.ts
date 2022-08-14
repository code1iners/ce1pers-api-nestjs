import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Member {
  @Field(() => ID)
  id: number;

  @Field({ description: 'Member email' })
  email: string;

  @Field()
  password: string;

  @Field()
  username: string;
}
