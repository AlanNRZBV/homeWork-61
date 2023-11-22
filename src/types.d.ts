import { PropsWithChildren } from 'react';

export interface IPanel extends PropsWithChildren {}

export interface ICountriesItem {
  name: string;
  flag: string;
}
export interface ICountries {
  countries: ICountriesItem[];
}

export interface IApiCountry {
  name: string,
  flag: string
}