import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider';


function Product(props) {
  

  // Destructure props.data for easier access
  const {id, title, price, rating, image } = props.data;
  const [{basket},dispatch]=useStateValue();
  // console.log({basket});
  if (!props.data || !props.data.title || !props.data.price || !props.data.rating || !props.data.image) {
    // Handle the case where props.data is missing or incomplete
    return <div>Error: Missing or incomplete product data</div>;
  }
  const addToBasket=()=>{
    //add item to data layer 
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    });
  };
   return (
    
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          <p>{'⭐'.repeat(rating)}</p>
        </div>
        </div> 
        <img src={image} alt='item'/>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product