import  { PropsWithChildren } from 'react';

export interface IPanel extends PropsWithChildren {
  vhMaxHeight?: boolean
}

export interface ICountriesItem {
  name: string,
  flag: string
  onClick?:(name: string)=> void
}

export interface ICountryExpand{
  name: string;
  flag: string;
  capital: string,
  region:string;
  subregion: string,
  population: number
}

export interface ICountries {
  countries: ICountriesItem[];
  clickHandler?: (name: string)=> void
}

export interface IApiCountries {
  name: string,
  flag: string
}

export interface IApiCountry {
  name: string;
  flag: string;
  capital: string,
  region:string;
  subregion: string,
  population: number
}