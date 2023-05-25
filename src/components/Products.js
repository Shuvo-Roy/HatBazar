import React from 'react'
import ProductsCard from './ProductsCard'
import { Brand } from './Brand'

const Products = ({products}) => {
  //console.log(products)
    const getRandomProducts = (arr, count) => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    const randomProducts = getRandomProducts(products, 16);
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-bodycolor text-white py-2 w-80 text-center'>Our Brand</h1>
            <span className='w-20 h-[2px] bg-black'></span>
            <div>
              <Brand />
            </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-bodycolor text-white py-2 w-80 text-center'>Products</h1>
            <span className='w-20 h-[2px] bg-black'></span>
        </div>
        
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {
              randomProducts.map((item)=>{
                return <ProductsCard key={item._id} product={item}/>
              })
            }
        </div>
    </div>
  )
}

export default Products