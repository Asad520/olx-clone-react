import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Search from './pages/search/search';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/product'>
            <Product />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
