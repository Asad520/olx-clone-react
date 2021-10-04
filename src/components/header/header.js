import { Navbar, Container } from 'react-bootstrap';
import Brand from './components/brand';
import LocationSearch from './components/locationSearch';

export default function header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Brand />
        <LocationSearch />
      </Container>
    </Navbar>
  );
}
