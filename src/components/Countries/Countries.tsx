import CountriesItem from './CountriesItem.tsx';
import { ICountries } from '../../types';
import { FC } from 'react';

const Countries: FC<ICountries> = ({ countries, clickHandler }) => {
  return (
    <div className="d-flex flex-column pe-2">
      {countries.map((item, index) => (
        <CountriesItem
          onClick={clickHandler}
          name={item.name}
          flag={item.flag}
          key={index}
          alpha3Code={item.alpha3Code}
        />
      ))}
    </div>
  );
};

export default Countries;
