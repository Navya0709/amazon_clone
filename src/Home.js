import React from 'react'
import './Home.css'
import primevideo from './logos/primevideo.png'
import Product from './product/Product'
import bookimage from './logos/bookimage.jpeg'
import calci from './logos/calci.png'
import mouse from './logos/mouse.jpg'
import pad from './logos/pad.png'
import stand from './logos/stand.png'
import watch from './logos/watch.png'

function Home() {
  let data1={
    id:123,
    title:'The lean startup',
    price:9.79,
    image:bookimage,
    rating:5
  }
  let data6={
    id:128,
    title:'PRIVILiON Global Laptop Stand for Desk,Computer Stand Laptop Table',
    price:9.79,
    image:stand,
    rating:3
  }
  let data2={
    id:125,
    title:'Portronics Toad 23 Wireless Optical Mouse',
    price:9.79,
    image:mouse,
    rating:5
  }
  let data3={
    id:126,
    title:'Casio FX-991ES Plus-2nd Edition Scientific Calculator, Black',
    price:9.79,
    image:calci,
    rating:5
  }
  let data4={
    id:127,
    title:'Redmi Pad',
    price:9.79,
    image:pad,
    rating:5
  }
  let data5={
    id:128,
    title:'Titan Neo Analog Green Dial Mens Watch',
    price:9.79,
    image:watch,
    rating:4
  }
  return (
    <div className='home'>
        <div className='home-container'>
           <img src={primevideo} className='home-image' alt='amazon-prime'/>

           <div className='home-row'>
            <Product data={data1}/>
            {/*product*/}
            <Product data={data2}/>

           </div>
           
           <div className='home-row'>
            {/*product*/}
            <Product data={data3}/>
            {/*product*/}
            <Product data={data4}/>
            {/*product*/}
            <Product data={data5}/>

           </div>

           <div className='home-row'>
            {/*product*/}
            <Product data={data6}/>
            

           </div>

        </div> 
    
    </div>
  )
}

export default Home