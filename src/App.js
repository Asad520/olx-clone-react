import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Search from './pages/search/search';
import store from './redux/storeConfig';
import initializeFirebase from './utils/services/firebaseConfig';

function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <Provider store={store}>
      <Router>
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
      </Router>
    </Provider>
  );
}

export default App;
