import FavouriteItem from '../components/FavouriteItem/FavouriteItem';

import { useSelector } from 'react-redux';

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
  return (
    <>
      <ul>{favourites}</ul>
    </>
  );
};

export default Favourites;
