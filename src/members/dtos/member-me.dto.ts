import { ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';

@ObjectType()
export class MemberMeOutput extends CoreOutput {}
