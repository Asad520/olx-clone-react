import { Navbar, Container } from 'react-bootstrap';
import { Brand } from './components/brand';
import { LocationSearch } from './components/locationSearch';
import { ItemSearch } from './components/itemSearch';
import { HeaderButtons } from './components/headerButtons';

export function Header() {
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
