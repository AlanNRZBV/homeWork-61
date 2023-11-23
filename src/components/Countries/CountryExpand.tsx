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
        <span>
          <b>Borders:</b>
        </span>

        {fullBorders && fullBorders.length !== 0 ? (
          <ul>
            {fullBorders?.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ) : (
          <span>Has no borders</span>
        )}
      </div>
      <div>
        <img src={flag} alt={`${name}'s flag`} style={{ maxWidth: '250px' }} />
      </div>
    </div>
  );
};

export default CountryExpand;
