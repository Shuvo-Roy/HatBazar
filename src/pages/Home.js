import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'
import PromoSale from '../components/PromoSale'

const Home = () => {
  const [products,setProducts] = useState([])
  //load the data
  const data = useLoaderData()
  //set the data
  useEffect(()=>{
    setProducts(data.data.record)
  },[data])
  return (
    <div>
        <Banner/>
        <Products products={products}/>{/*pass data on the Products file*/}
        <PromoSale/>{/*pass data on the Products file*/}
    </div>
  )
}

export default Home