import { ICountryExpand } from '../../types';
import { FC } from 'react';

const CountryExpand: FC<ICountryExpand> = ({
  name,
  flag,
  capital,
  region,
  subregion,
  population,
  fullBorders,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <span>
          <b>Name:</b> {name}
        </span>
        <span>
          <b>Capital</b>: {capital}
        </span>
        <span>
          <b>Region/Subregion:</b> {region} / {subregion}
        </span>
        <span>
          <b>Population:</b> {population}
        </span>
        <ul>{fullBorders?.map((item) => <li>{item}</li>)}</ul>
      </div>
      <div>
        <img src={flag} alt={`${name}'s flag`} style={{ maxWidth: '250px' }} />
      </div>
    </div>
  );
};

export default CountryExpand;
