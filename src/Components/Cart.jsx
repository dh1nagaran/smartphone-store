import React from 'react'

const Cart = ({ cartopen, cartItems, setCartopen, quantity, removeitem }) => {
    const totalprice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <div className={`fixed right-0 w-80 h-full bg-white shadow-xl z-20 transform transition-transform duration-300 ${cartopen ? "translate - x - 0" : "translate-x-full"}`}>
            <div className='p-4 h-full'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-bold text-emerald-800'>Your Cart</h2>
                    <button className='cursor-pointer' onClick={() => setCartopen(false)}>X</button>

                </div>
                {cartItems.length === 0 ? <p className='text-center'>cart is empty</p> : (
                    cartItems.map((item, id) =>
                    (
                        < div key={id} className='flex mb-4'>
                            <img src={item.image} className='w-16 h-16 object-contain mr-4' />
                            <div className='flex-1'>
                                <h3 className='text-sm font-semibold'>{item.brand} | {item.model}</h3>
                                <p>Rs.{item.price} X {item.quantity}</p>
                                <div>
                                    <button className='px-2 py-1 bg-emerald-700 font-bold rounded cursor-pointer' onClick={() => quantity(item.id, item.quantity + 1)}>+</button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <button className='px-2 py-1 bg-emerald-700 font-bold rounded cursor-pointer' onClick={() => quantity(item.id, item.quantity - 1)}>-</button>

                                    <button onClick={() => removeitem(item.id)} className='ml-2 cursor-pointer text-red-500'>Remove</button>
                                </div>

                            </div>
                        </div>

                    ))

                )}
                <div>
                    <hr />
                    <p className='text-lg font-semibold'>Total:Rs.{totalprice.toFixed(2)}</p>
                    <button className='w-full bg-emerald-700 text-white py-2 rounded ' disabled={cartItems.length === 0}>Proceed to checkout</button>
                </div>
            </div>



        </div >
    )
}

export default Cart