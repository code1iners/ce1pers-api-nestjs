import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from '@/core/dtos/core.dto';
import { CommonFetchTvInput } from '@/movies/dtos/tv-contents/shared.dto';

@InputType()
export class FetchTvWatchProvidersInput extends PickType(CommonFetchTvInput, [
  'tvId',
] as const) {}

@ObjectType()
export class TvWatchProviderResultFlatrate {
  @Field(() => Int)
  displayPriority: number;

  @Field(() => String)
  logoPath: string;

  @Field(() => Int)
  providerId: number;

  @Field(() => String)
  providerName: string;
}

@ObjectType()
export class TvWatchProviderResultObject {
  @Field(() => String)
  link: string;

  @Field(() => [TvWatchProviderResultFlatrate])
  flatrate: TvWatchProviderResultFlatrate[];
}

@ObjectType()
export class TvWatchProviderResult {
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  AE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  AR?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  AT?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  AU?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BA?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BB?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BG?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BO?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BR?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  BS?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CA?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CH?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CI?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CL?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CO?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CR?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  CZ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  DE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  DK?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  DO?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  DZ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  EC?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  EG?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  ES?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  FI?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  FR?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  GB?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  GF?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  GH?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  GQ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  GT?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  HK?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  HN?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  HR?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  HU?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  ID?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  IE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  IL?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  IN?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  IQ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  IT?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  JM?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  JP?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  KE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  KR?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  LB?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  LY?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  MD?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  MU?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  MX?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  MY?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  MZ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  NE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  NG?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  NL?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  NO?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  NZ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PA?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PH?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PL?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PS?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PT?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  PY?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  RO?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  RU?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SA?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SC?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SG?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SK?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SN?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  SV?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  TH?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  TT?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  TW?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  TZ?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  UG?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  US?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  UY?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  VE?: TvWatchProviderResultObject;
  @Field(() => TvWatchProviderResultObject, { nullable: true })
  ZM?: TvWatchProviderResultObject;
}

@ObjectType()
export class FetchTvWatchProvidersResponse {
  @Field(() => Int)
  id: number;

  @Field(() => TvWatchProviderResult)
  results: TvWatchProviderResult;
}

@ObjectType()
export class FetchTvWatchProvidersOutput extends CoreOutput {
  @Field(() => FetchTvWatchProvidersResponse, { nullable: true })
  data?: FetchTvWatchProvidersResponse;
}
