import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Products = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const result = response.data;
      setProductList(result);
      console.log(result, 'jjjj');
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {};

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="lg:grid lg:grid-cols-4 lg:gap-12 items-center p-12">
        {productList?.map((product, index) => {
          return (
            <ProductCard
              title={product?.title}
              image={product?.image}
              price={product?.price}
              originalPrice={product?.price + 100}
              onAddToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
