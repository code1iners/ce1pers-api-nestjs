import { CoreOutput } from '@/core/dtos/core.dto';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class GetImageUrlInput {
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isOriginal?: boolean;
}

@ObjectType()
export class GetImageUrlOutput {
  @Field(() => String)
  fullUrl: string;

  @Field(() => String)
  origin: string;

  @Field(() => String)
  path: string;
}
