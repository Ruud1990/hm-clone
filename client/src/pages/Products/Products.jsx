import React, {useState} from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom';

const Products = () => {

  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='prducts-container'>
      <div className='products-left'>
        <div className='filterProduct'>
          <h2>Product Categories</h2>
          <div className='inputProduct'>
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputProduct'>
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className='inputProduct'>
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className='filterProduct'>
          <h2>Filter by price</h2>
          <div className='inputProduct'>
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterProduct'>
          <h2>Sort by</h2>
          <div className='inputProduct'>
            <input type='radio' id='asc' value='asc' name='price' onChange={(e) => setSort('asc')}/>
            <label htmlFor='asc'>Price (lowest first)</label>
          </div>
          <div className='inputProduct'>
            <input type='radio' id='desc' value='desc' name='price' onChange={(e) => setSort('desc')}/>
            <label htmlFor='desc'>Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className='products-right'>
        <img className='categoryImg' src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products