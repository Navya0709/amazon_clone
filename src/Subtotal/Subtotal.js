import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function Subtotal() {
  const [{basket}]=useStateValue();
  // let sumTotal=0;
  // for(let i=0;i<basket.length;i++)
  // sumTotal+=basket[i].price;
  // console.log(sumTotal);
  // console.log({basket});

  


  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(val)=>(
            <>
            <p>
                Subtotal({basket.length} items):
                <strong>${getBasketTotal(basket)}</strong>
                </p>
                <small className='subtotal-gift'>
                    <input type='checkbox'/>This orders
                    contains  a gift
                </small>
            </>
        )}
        decimalScale={2}
        val={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix='$'
        />
        <button>Proceed to checkout</button>

    </div>
  )
}

export default Subtotal