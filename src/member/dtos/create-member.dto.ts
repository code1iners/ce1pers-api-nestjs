import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberEntity } from 'src/member/entities/member.entity';

@InputType()
export class CreateMemberInput extends PickType(
  MemberEntity,
  ['email', 'name', 'password', 'birthdate', 'phoneNumber'] as const,
  InputType,
) {}

@ObjectType()
export class CreateMemberOutput extends CoreOutput {}
