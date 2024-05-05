import React from 'react';
import './BasketItem.css';
import { useStateValue } from '../StateProvider';
function BasketItem(props) {
  // console.log(props)
  let rating = props.data.rating;
  let id=props.data.id;
  const [{basket},dispatch]=useStateValue();
  
  const removeFromBasket=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id
    })


  }
  return (
    <div className='basket-item'>
      <img src={props.data.image} className='item_image'/>
      <div className='item_info'>
        <p className='item_title'>{props.data.title}</p>
        <p className='item-price'>
          <weak>$</weak>
          <strong>{props.data.price}</strong>
        </p>
        <div>
          <p>{'⭐'.repeat(rating)}</p>
        </div>
        <button className='remove-item' onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default BasketItem;
