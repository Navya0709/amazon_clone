import React from 'react'
import './Checkout.css'
import ad from '../logos/ad.png'
import Subtotal from '../Subtotal/Subtotal'
import BasketItem from '../BasketItem/BasketItem'
import { useStateValue } from '../StateProvider'


function Checkout() {
  const [{basket,user}]=useStateValue()
  return (
    <div className='checkout'>
        {/* <h1>hi</h1> */}
        <div className='checkout-left'>
            <img className='checkout-ad' src={ad} alt=''/>
            <div>
              <h3>Hello {user?.email}</h3>
              <h1 className='checkout-title'>
                Your Shopping Basket
                

                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                
              </h1>
              {basket.map(item=>(
                <BasketItem data={item}/>
              ))}
            </div>

        </div>
        <div className='checkout-right'>
          {/* subtotal */}
          <Subtotal/>
            <h3>The subtotal will go here</h3>
        </div>
        

    </div>
  )
}

export default Checkout