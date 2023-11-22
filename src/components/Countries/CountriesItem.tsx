import { ICountriesItem } from '../../types';
import { FC } from 'react';

const CountriesItem: FC<ICountriesItem> = ({name, flag}) => {
  return (
    <div>
      <span className="text text-black">{name}</span>
      <img src={flag} alt={`${name}'s flag`} style={{maxWidth: '30px', maxHeight: 'auto'}}/>
    </div>
  );
};

export default CountriesItem;