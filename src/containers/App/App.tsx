import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Panel from '../../components/Panel/Panel.tsx';
import Countries from '../../components/Countries/Countries.tsx';
import CountriesItemExpand from '../../components/Countries/CountriesItemExpand.tsx';
import { useEffect, useState } from 'react';
import { IApiCountry, ICountriesItem } from '../../types';
import axios from 'axios';

const BASE_URl = 'https://restcountries.com/v2/all?fields=flag,name';

const App = () => {
  const [countries, setCountries] = useState<ICountriesItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesResponse = await axios.get<IApiCountry[]>(BASE_URl);
        const newCountries = countriesResponse.data;
        const countriesItems: ICountriesItem[] = newCountries.map((item) => ({
          name: item.name,
          flag: item.flag,
        }));
        setCountries(countriesItems);
      } catch (e) {
        console.log(e);
      }
    };
    void fetchData();
  }, []);
  return (
    <>
      <Container className="py-3">
        <Row>
          <Col>
            <Panel>
              <Countries countries={countries} />
            </Panel>
          </Col>
          <Col>
            <Panel>
              <CountriesItemExpand />
            </Panel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
