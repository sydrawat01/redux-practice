import React from 'react';
import classes from './FavouriteItem.module.css';

import Card from '../UI/Card';

const FavouriteItem = (props) => {
  return (
    <li>
      <Card>
        <div className={classes['favourite-item']}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
};

export default FavouriteItem;
