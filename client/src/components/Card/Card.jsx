import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({item}) => {
  return (
      <Link className='link'>
    <div className='card'>
        <div className='card-img'>
        {item.isNew && <span>New Season</span>}
            <img src={item.img} alt='product img' className='mainImg'></img>
            <img src={item.img2} alt='product img' className='secondImg'></img>
        </div>
        <h2>{item.title}</h2>
        <div className='card-prices'>
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
        </div>
    </div>
      </Link>

  )
}

export default Card