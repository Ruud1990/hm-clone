import React, {useEffect, useState} from 'react'
import Card from '../Card/Card';
import {options} from '../../utils/fetchData'
import useFetchProducts from '../../hooks/useFetchProducts';


const FeaturedProducts = () => {
    const { data } = useFetchProducts(
        'https://kohls.p.rapidapi.com/products/list?limit=5&offset=6', options
      );


  return (
    <div className='featuredProducts'>
        <div className='featuredProducts-top'>
            <h1>products</h1>
            <p>lorem ipsum dolor sit amet</p>
        </div>
        <div className='featuredProducts-bottom'>
            {data.map((product, id) => (
                <Card product={product} key={id} />
            ))
                
            }
        </div>
    </div>
  )
}

export default FeaturedProducts