import React from 'react'
import '../index.css'
import product from '../Database/data.json'

const Products = ({ filterproduct, filterproducts, additem }) => {
  return (
    <div className='ml-10'>
      <div>
        <h1 className='text-emerald-950 text-xl font-bold  mb-0 mt-2'>Products({filterproduct})</h1>
      </div>
      <div className=' max-h-screen  max-w-screen overflow-scroll grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3  items-center shadow ' >
        {
          filterproducts.map((product, id) => (
            <div key={id} className='w-96 h-fit flex flex-col p-11 m-auto shadow justify-center  rounded-md items-center  hover:shadow-2xl bg-white  ' >

              <div>
                <img src={product.image} className='w-28 h-28 ' />
              </div>
              <div className='items-center mt-1.5 gap-1.5 flex-col'>
                <h1 className='text-emerald-950 font-bold mb-1.5'>Product Name</h1>
                <p className='mb-2'>- {product.brand} | {product.model}</p>
                <p className='mb-2'>- {product.ram}GB | {product.storage} GB</p>
                <p className='mb-2'>- {product.os} | {product.battery}</p>
                <p className='mb-2'>- Rs.{product.price}</p>
                <p className='mt-4'> {product.availability ? <button onClick={() => additem(product)} className='bg-emerald-600 font-medium rounded p-2 cursor-pointer text-white'>ADD TO CART</button> : <p className='  font-medium text-white  bg-red-600 w-fit p-2 rounded'>SOLD OUT</p>}</p>

              </div>
            </div>
          ))
        }
      </div >
    </div >
  )
}

export default Products