import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { ProductActions } from '../../store/actions/product-actions';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const toggleFavHandler = () => {
    dispatch(ProductActions.toggleFav(props.id));
  };

  return (
    <li>
      <Card>
        <div className={classes['product-item']}>
          <h2 className={props.isFavourite ? `${classes.fav}` : ''}>
            {props.title}
          </h2>
          <p>{props.description}</p>
          <button
            onClick={toggleFavHandler}
            className={!props.isFavourite ? `${classes['button-outline']}` : ''}
          >
            {!props.isFavourite ? 'Favourite' : 'Un-Favourite'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
