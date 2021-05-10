import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes['nav-header']}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" activeClassName={classes.active}>
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
