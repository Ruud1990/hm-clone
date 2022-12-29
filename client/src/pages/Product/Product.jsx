import React, {useState} from 'react'
import { AiOutlineShoppingCart,  } from 'react-icons/ai'
import { MdFavorite, MdCompare  } from 'react-icons/md'

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [count, setCount] = useState(1);
  const images = [
    'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80'
  ];
  return (
    <div className='product-container'>
      <div className='product-left'>
        <div className='product-images'>
          <img src={images[0]} alt='product' onClick={(e) => setSelectedImg(0)}></img>
          <img src={images[1]} alt='product' onClick={(e) => setSelectedImg(1)}></img>
        </div>
        <div className='product-mainImg'>
          <img src={images[selectedImg]} alt='main img'></img>
        </div>
      </div>
      <div className='product-right'>
        <h1>Title</h1>
        <span className='product-price'>$100</span>
        <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
        <div className='product-quantity'>
          <button onClick={() => setCount(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {count}
          <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
        <button className='product-add'>
          <AiOutlineShoppingCart/> ADD TO CART
        </button>
        <div className='product-link'>
        <div className='product-item'>
          <MdFavorite/> ADD TO WISH LIST
        </div>
        <div className='product-item'>
          <MdCompare/> ADD TO COMPARE
        </div>
        </div>
        <div className="product-info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
          <hr />
        </div>
        <div className="product-details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product