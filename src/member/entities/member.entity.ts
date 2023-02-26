import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';

@ObjectType()
export class MemberEntity extends CoreEntity {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => String, { defaultValue: false, nullable: true })
  isEmailVerified: boolean;

  @Field(() => String, { defaultValue: false, nullable: true })
  isPhoneNumberVerified: boolean;

  @Field(() => String, { defaultValue: false, nullable: true })
  isDormant: boolean;

  @Field(() => String, { nullable: true })
  birthdate: Date;
}
