import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { JwtTokenEntity } from 'src/member/entities/jwt-token.entity';
import { MemberProfileGender } from 'src/member/enums/profile-gender.enum';
import { MemberProfileLoginType } from 'src/member/enums/profile-login-type.enum';
import { ServiceMembershipLevel } from 'src/member/enums/profile-membership-level.enum';

@ObjectType()
@InputType({ isAbstract: true })
export class ProfileEntity extends CoreEntity {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => Date, { nullable: true })
  birthdate?: Date;

  @Field(() => Boolean, { defaultValue: false })
  isEmailVerified: boolean;

  @Field(() => Boolean, { defaultValue: false })
  isPhoneNumberVerified: boolean;

  @Field(() => Boolean, { defaultValue: false })
  isDormant: boolean;

  @Field(() => MemberProfileGender, { nullable: true, defaultValue: 'NONE' })
  gender?: MemberProfileGender;

  @Field(() => MemberProfileLoginType, { defaultValue: 'EMAIL' })
  loginType: MemberProfileLoginType;

  @Field(() => ServiceMembershipLevel, { defaultValue: 'FREE' })
  membershipLevel: ServiceMembershipLevel;

  @Field(() => JwtTokenEntity, { nullable: true, defaultValue: 'EMAIL' })
  jwtToken?: JwtTokenEntity;
}
