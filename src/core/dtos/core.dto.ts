import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class CoreOutputError {
  @Field(() => String)
  message: string;

  @Field(() => String)
  code: string;
}

@ObjectType()
export class CoreOutput {
  @Field(() => Boolean)
  ok: boolean;

  @Field(() => CoreOutputError, { nullable: true })
  error?: CoreOutputError;
}
