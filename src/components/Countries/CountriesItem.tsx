import { ICountriesItem } from '../../types';
import { FC } from 'react';

const CountriesItem: FC<ICountriesItem> = ({ name, flag, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="d-flex justify-content-between mb-2 border border-1"
    >
      <span className="text text-black">{name}</span>
      <img
        src={flag}
        alt={`${name}'s flag`}
        style={{ maxWidth: '30px', maxHeight: 'auto' }}
      />
    </div>
  );
};

export default CountriesItem;
