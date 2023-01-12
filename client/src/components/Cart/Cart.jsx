import React from 'react'
import {MdDelete} from 'react-icons/md'

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      img2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
      title: 'ssc',
      oldPrice: 22,
      price: 12,
      desc: 'djcbdcnd dkndkvd djkdjdk dckjdjc'
  },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      img2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
      title: 'ssc',
      oldPrice: 22,
      price: 12,
      desc: 'djcbdcnd dkndkvd djkdjdk dckjdjc'
  }
  ]
  return (
    <div className='cart-container'>
      <h1>Products in cart</h1>
      {data?.map(item => (
        <div className='cart-item' key={item.id}>
        <img src={item.img} alt={item.title}/>
        <div className='cart-details'>
          <h2>{item.title}</h2>
          <p>{item.desc.substring(0,100)}</p>
          <div className="cart-price">1 x ${item.price}</div>
        </div>
      <MdDelete className='cart-deleteIcon'/>
        </div>
      ))}
      <div className="cart-total">
        <span>subtotal</span>
        <span>$123</span>
      </div>
      <div className="cart-summary">
        <button>pass to checkout</button>
        <span className='cart-reset'>reset cart</span>
      </div>
    </div>
  )
}

export default Cart