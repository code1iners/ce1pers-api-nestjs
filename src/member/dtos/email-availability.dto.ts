import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';

@InputType()
export class EmailAvailabilityInput {
  @Field(() => String)
  email: string;
}

@ObjectType()
export class EmailAvailabilityOutputData {
  @Field(() => Boolean)
  availability: boolean;
}

@ObjectType()
export class EmailAvailabilityOutput extends CoreOutput {
  data?: EmailAvailabilityOutputData;
}
