import FavouriteItem from '../components/FavouriteItem/FavouriteItem';

import { useSelector } from 'react-redux';
import classes from './Favourites.module.css';

const Favourites = (props) => {
  const data = useSelector((state) => state.shop.products);
  const filteredData = data.filter((item) => item.isFavourite);

  const favourites = filteredData.map((item) => (
    <FavouriteItem
      key={item.id}
      title={item.title}
      description={item.description}
    />
  ));
  let content = (
    <p className={classes['not-found']}>Sorry, no favourites found!</p>
  );
  if (filteredData.length > 0) {
    content = <ul>{favourites}</ul>;
  }

  return <>{content}</>;
};

export default Favourites;
