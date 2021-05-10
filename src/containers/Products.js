import ProductItem from '../components/ProductItem/ProductItem';

import { useSelector } from 'react-redux';

const Products = (props) => {
  const data = useSelector((state) => state.shop.products);
  const products = data.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      isFavourite={item.isFavourite}
    />
  ));
  return (
    <>
      <ul>{products}</ul>
    </>
  );
};

export default Products;
