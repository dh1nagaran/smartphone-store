import React from 'react'
import '../index.css'

const Navbar = ({ search, setSearch, cartItems, setCartopen }) => {
    const totalitems = cartItems.length;
    return (
        <nav className='bg-emerald-800 p-4 sticky top-0 z-10 shadow-md'>
            <div className=' text-white w-full mx-auto flex justify-around  items-center '>
                <h1>Smartphone Store</ h1>
                <input type='text' className='p-2 text-black bg-amber-50 outline-none rounded w-3xs' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search By Brand Model Battery And Os ' />
                <button className='cursor-pointer' onClick={() => setCartopen((prev) => !prev)}>🛒{totalitems > 0 ? <span>{totalitems}</span> : " "}</button>
                <span ></span>
            </div>
        </nav >
    )
}

export default Navbar