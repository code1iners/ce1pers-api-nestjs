import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberEntity } from 'src/member/entities/member.entity';

@InputType()
export class LogoutInput extends PickType(
  MemberEntity,
  ['id'] as const,
  InputType,
) {}

@ObjectType()
export class LogoutOutput extends CoreOutput {}
