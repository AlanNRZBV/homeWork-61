import { PropsWithChildren } from 'react';

export interface IPanel extends PropsWithChildren {
  vhMaxHeight?: boolean;
}

export interface ICountriesItem {
  name: string;
  flag: string;
  alpha3Code?: string;
  onClick?: (name: string) => void;
}

export interface ICountryExpand {
  name: string;
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  borders?: string[];
  fullBorders?: string[];
}

export interface ICountries {
  countries: ICountriesItem[];
  clickHandler?: (name: string) => void;
}

export interface IApiCountries {
  name: string;
  flag: string;
  alpha3Code: string;
}

export interface IApiCountry {
  name: string;
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  borders: string[];
}
