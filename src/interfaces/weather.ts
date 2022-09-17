export interface RawInterval {
  startTime: string;
  values: {
    humidity: number;
    precipitationProbability: number;
    pressureSurfaceLevel: number;
    temperature: number;
    uvIndex: number;
    weatherCode: number;
    windDirection: number;
    windSpeed: number;
  };
}

export interface RawIntervals extends Array<RawInterval> {}

export interface TimelineRaw {
  timestep: string;
  endTime: string;
  startTime: string;
  intervals: RawIntervals;
}

export interface TimelinesRaw extends Array<TimelineRaw> {}

export interface WarningRaw {
  code: number;
  type: string;
  message: string;
  meta: {
    field: string;
    from: string;
    to: string;
  };
}

export interface WarningsRaw extends Array<WarningRaw> {}

export interface WeatherRaw {
  data: {
    timelines: TimelinesRaw;
    warnings: WarningsRaw;
  };
}

export interface IntervalInterface {
  startTime: string;
  humidity: number;
  rainChance: number;
  pressure: number;
  temperature: number;
  uvIndex: number;
  weatherCode: number;
  windDirection: number;
  windSpeed: number;
}

export interface IntervalsInterface extends Array<IntervalInterface> {}

export interface WeatherInterface {
  current: IntervalsInterface;
  hours: IntervalsInterface;
  days: IntervalsInterface;
}
