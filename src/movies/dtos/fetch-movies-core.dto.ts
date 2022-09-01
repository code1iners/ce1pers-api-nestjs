import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FetchMoviesCoreInput {
  @Field(() => String, {
    defaultValue: 'ko',
    nullable: true,
    description:
      'Pass a ISO 639-1 value to display translated data for the fields that support it.',
  })
  language?: string;
}
