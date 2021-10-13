import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Search from './pages/search/search';
import initializeFirebase from './utils/services/firebaseConfig';

function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/product/:productId'>
            <Product />
          </Route>
          <Route path='/search/:query'>
            <Search />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
