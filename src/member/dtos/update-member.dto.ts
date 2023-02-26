import { InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberEntity } from '../entities/member.entity';

@InputType()
export class UpdateMemberInput extends PartialType(MemberEntity, InputType) {}

@ObjectType()
export class UpdateMemberOutput extends CoreOutput {}
