import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import FilterCards from '../components/FilterCards'

const Womens = () => {
  const [products,setProducts] = useState([])
  //load the data
  const data = useLoaderData()
  //set the data
  useEffect(()=>{
    setProducts(data.data.record)
  },[data])
  const womenProducts = products.filter((product) => product.category === 'women');
  console.log(womenProducts)
  return (
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
    {
      womenProducts.map((item)=>{
        return <FilterCards key={item._id} product={item}/>
      })
    }
    {/* <FilterCards product={womenProducts}/> */}
    </div>
  )
}

export default Womens