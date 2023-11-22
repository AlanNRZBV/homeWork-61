import CountriesItem from './CountriesItem.tsx';
import { ICountries } from '../../types';
import { FC } from 'react';

const Countries: FC<ICountries> = ({countries}) => {
  return (
    <div>
      {countries.map((item, index)=>(
        <CountriesItem name={item.name} flag={item.flag} key={index}/>
      ))}
    </div>
  );
};

export default Countries;