import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Gender, LoginType, MembershipLevel } from '@prisma/client';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberEntity } from 'src/member/entities/member.entity';
import { MemberProfileGender } from 'src/member/enums/profile-gender.enum';
import { ServiceMembershipLevel } from 'src/member/enums/profile-membership-level.enum';
import { MemberProfileLoginType } from 'src/member/enums/profile-login-type.enum';

@InputType()
export class CreateMemberInput extends PickType(
  MemberEntity,
  ['email', 'password'] as const,
  InputType,
) {
  @Field(() => String)
  username: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => Date, { nullable: true })
  birthdate?: Date;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isEmailVerified: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isPhoneNumberVerified: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isDormant: boolean;

  @Field(() => MemberProfileGender, {
    nullable: true,
    defaultValue: MemberProfileGender.NONE,
  })
  gender?: Gender;

  @Field(() => MemberProfileLoginType)
  loginType: LoginType;

  @Field(() => ServiceMembershipLevel, {
    defaultValue: ServiceMembershipLevel.FREE,
  })
  membershipLevel: MembershipLevel;
}

@ObjectType()
export class CreateMemberOutput extends CoreOutput {}
