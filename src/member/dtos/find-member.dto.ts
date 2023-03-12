import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Gender, LoginType, MembershipLevel } from '@prisma/client';
import { CoreOutput } from 'src/core/dtos/core.dto';
import { MemberProfileGender } from 'src/member/enums/profile-gender.enum';
import { MemberProfileLoginType } from 'src/member/enums/profile-login-type.enum';
import { ServiceMembershipLevel } from 'src/member/enums/profile-membership-level.enum';

@InputType()
export class FindMemberInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  username?: string;
}

@InputType()
export class FindMemberByIdInput {
  @Field(() => Number)
  id: number;
}

@InputType()
export class FindMemberByEmailInput {
  @Field(() => String)
  email: string;
}

@ObjectType()
export class FindMemberOutputData {
  @Field(() => Number)
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String)
  username: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => Date, { nullable: true })
  birthdate?: Date;

  @Field(() => Boolean)
  isEmailVerified: boolean;

  @Field(() => Boolean)
  isPhoneNumberVerified: boolean;

  @Field(() => Boolean)
  isDormant: boolean;

  @Field(() => MemberProfileGender)
  gender: Gender;

  @Field(() => MemberProfileLoginType)
  loginType: LoginType;

  @Field(() => ServiceMembershipLevel)
  membershipLevel: MembershipLevel;

  @Field(() => Number)
  memberId: number;
}

@ObjectType()
export class FindMemberOutput extends CoreOutput {
  @Field(() => FindMemberOutputData, { nullable: true })
  data?: FindMemberOutputData;
}
