import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsGoogle} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <span>BE IN CONTACT WITH US:</span>
            <div className='contact-mail'>
                <input type='text' placeholder='Enter your e-mail...' />
                <button>Join us</button>
            </div>
            <div className='contact-icons'>
                <BsFacebook className='contact-icon'/>
                <BsInstagram className='contact-icon'/>
                <BsTwitter className='contact-icon'/>
                <BsGoogle className='contact-icon'/>
            </div>
        </div>
    </div>
  )
}

export default Contact