import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/core/entities/core.entity';
import { ProfileEntity } from './profile.entity';

@ObjectType()
@InputType({ isAbstract: true })
export class JwtTokenEntity extends CoreEntity {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => Boolean, { defaultValue: false })
  isAccessTokenValid: boolean;

  @Field(() => Boolean, { defaultValue: false })
  isRefreshTokenValid: boolean;

  @Field(() => ProfileEntity)
  profile: ProfileEntity;
}
