import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import FilterCards from '../components/FilterCards'


const Mens = () => {
  
  const [products,setProducts] = useState([])
  //load the data
  const data = useLoaderData()
  //set the data
  useEffect(()=>{
    setProducts(data.data.record)
  },[data])
  const menProducts = products.filter((product) => product.category === 'men');
  console.log(menProducts)
  return (
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
    {
      menProducts.map((item)=>{
        return <FilterCards key={item._id} product={item}/>
      })
    }
    {/* <FilterCards product={womenProducts}/> */}
    </div>
  )
}

export default Mens