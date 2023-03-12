import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { CreateMemberInput } from './create-member.dto';

@InputType()
export class UpdateMemberInput extends PartialType(
  CreateMemberInput,
  InputType,
) {
  @Field(() => Number)
  id: number;
}

@ObjectType()
export class UpdateMemberOutput extends CoreOutput {}
