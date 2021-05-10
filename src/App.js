import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './components/Layout/Navigation';
import Favourites from './containers/Favourites';
import ProductsPage from './containers/Products';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact component={ProductsPage} />
          <Route path="/favourites" component={Favourites} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
