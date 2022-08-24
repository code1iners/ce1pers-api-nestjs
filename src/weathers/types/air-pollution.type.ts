import { Field, ObjectType } from '@nestjs/graphql';
import { WeatherCoord } from '@/weathers/types/common-weather.type';

@ObjectType()
class AirPollutionItemMain {
  @Field(() => Number, {
    description:
      ' Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.',
  })
  aqi: number;
}

@ObjectType()
class AirPollutionItemComponent {
  @Field(() => Number, {
    description: 'Сoncentration of CO (Carbon monoxide), μg/m3',
  })
  co: number;

  @Field(() => Number, {
    description: 'Сoncentration of NO (Nitrogen monoxide), μg/m3',
  })
  no: number;

  @Field(() => Number, {
    description: 'Сoncentration of NO2 (Nitrogen dioxide), μg/m3',
  })
  no2: number;

  @Field(() => Number, {
    description: 'Сoncentration of O3 (Ozone), μg/m3',
  })
  o3: number;

  @Field(() => Number, {
    description: 'Сoncentration of SO2 (Sulphur dioxide), μg/m3',
  })
  so2: number;

  @Field(() => Number, {
    description: 'Сoncentration of PM2.5 (Fine particles matter), μg/m3',
  })
  pm2_5: number;

  @Field(() => Number, {
    description: 'Сoncentration of PM10 (Coarse particulate matter), μg/m3',
  })
  pm10: number;

  @Field(() => Number, {
    description: 'Сoncentration of NH3 (Ammonia), μg/m3',
  })
  nh3: number;
}

@ObjectType()
export class AirPollutionItem {
  @Field(() => AirPollutionItemMain)
  main: AirPollutionItemMain;

  @Field(() => AirPollutionItemComponent)
  components: AirPollutionItemComponent;

  @Field(() => Number, {
    description: 'Date and time',
  })
  dt: number;
}

@ObjectType()
export class CurrentAirPollutionResponse {
  @Field(() => WeatherCoord)
  coord: WeatherCoord;

  @Field(() => [AirPollutionItem])
  list: AirPollutionItem[];
}
