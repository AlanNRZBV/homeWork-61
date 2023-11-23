import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Panel from '../../components/Panel/Panel.tsx';
import Countries from '../../components/Countries/Countries.tsx';
import CountryExpand from '../../components/Countries/CountryExpand.tsx';
import { useEffect, useRef, useState } from 'react';
import {
  IApiCountries,
  IApiCountry,
  ICountriesItem,
  ICountryExpand,
} from '../../types';
import axios, { name } from 'axios';

const BASE_URl = 'https://restcountries.com/v2/';
const NAME_URL = 'name/';
const ALL_URL = 'all?fields=flag,name';

const App = () => {
  const [countries, setCountries] = useState<ICountriesItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [country, setCountry] = useState<ICountryExpand[]>([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      setIsLoading(true);
      try {
        const countriesResponse = await axios.get<IApiCountries[]>(
          BASE_URl + ALL_URL,
        );
        const newCountries = countriesResponse.data;
        const countriesItems: ICountriesItem[] = newCountries.map((item) => ({
          name: item.name,
          flag: item.flag,
        }));
        setCountries(countriesItems);
      } catch (e) {
        console.log('Caught error while fetching all countries data ' + e);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchCountriesData();
  }, []);

  useEffect(() => {
    if (selectedCountry !== '') {
      const fetchCountryData = async () => {
        try {
          const countryResponse = await axios.get<IApiCountry[]>(
            BASE_URl + NAME_URL + selectedCountry,
          );
          const newCountry = countryResponse.data;
          if (newCountry.length > 0) {
            const countryObj: ICountryExpand = {
              name: newCountry[0].name,
              flag: newCountry[0].flag,
              population: newCountry[0].population,
              capital: newCountry[0].capital,
              region: newCountry[0].region,
              subregion: newCountry[0].subregion,
            };
              setCountry([countryObj]);
              setIsSelected(true);

          }
        } catch (e) {
          console.log('Caught error while fetching data for selected country ' + e);
        }
      };
      void fetchCountryData();
    }
  }, [selectedCountry]);

  const getCountryInfo = (name: string) => {
    setSelectedCountry(name);
  };
  return (
    <>
      <Container className="">
        <Row>
          <Col xs={3}>
            <Panel vhMaxHeight={true}>
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <Countries
                    countries={countries}
                    clickHandler={getCountryInfo}
                  />
                </>
              )}
            </Panel>
          </Col>
          <Col>
            <Panel>
              {isSelected ? (
                country.map((item, index) => (
                  <CountryExpand
                    key={index}
                    name={item.name}
                    flag={item.flag}
                    capital={item.capital}
                    region={item.region}
                    subregion={item.subregion}
                    population={item.population}
                  />
                ))
              ) : (
                <span>no country selected</span>
              )}
            </Panel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
