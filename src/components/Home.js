import React, {useContext} from 'react';
//import product context
import {ProductContext} from '../contexts/ProductContext';
import Product from './Product';

const Home = () => {
    //get products from context
    const{ products } = useContext(ProductContext);
    // console.log(products);
    //get only men's & women products
    const filteredProduct = products.filter(item =>{
        return item.category === 'men\'s clothing' || item.category === 'women\'s clothing';
    });
        // console.log(filteredProduct);
  return <div>
    <section className='py-16'>
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:gird-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProduct.map((product) => {
                {/* return <div className='w-full h-[300px] bg-pink-200' key={product.id}>{product.title}</div> */}
                return <Product key={product.id}/>
            })} 
        </div>
    </div>
    </section>
  </div>;
};

export default Home;
