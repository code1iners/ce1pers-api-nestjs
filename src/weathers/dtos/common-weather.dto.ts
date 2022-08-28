import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CommonFetchLocationInput {
  @Field(() => String, {
    nullable: true,
    description: 'City name.',
  })
  cityName?: string;

  @Field(() => String, { nullable: true, description: 'Only for the US.' })
  stateCode?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Please use ISO 3166 country codes.',
  })
  countryCode?: string;
}
