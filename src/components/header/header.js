import { Navbar, Container } from 'react-bootstrap';
import Brand from './components/brand/brand';
import LocationSearch from './components/locationSearch/locationSearch';
import ItemSearch from './components/itemSearch/itemSearch';
import HeaderButtons from './components/headerButtons/headerButtons';

export default function Header() {
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container>
        <Navbar.Brand>
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <LocationSearch />
          <ItemSearch />
          <HeaderButtons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
