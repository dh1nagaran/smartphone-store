import React from 'react'
import product from '../Database/data.json'


const Sidebar = ({ brand, priceRange, setSelectedBrands, selectedBrands, setPriceRange, selectedram, setSelectedRam, selectedStorage, setSelectedStorage }) => {
    const ram = [...new Set(product.products.map((p) => p.ram))].sort((a, b) => a - b)
    const storage = [...new Set(product.products.map((p) => p.storage))].sort()
    const price = [...new Set(product.products.map((p) => p.price))].sort()
    const min = Math.min(...price)
    console.log(min)
    const max = Math.max(...price)
    console.log(ram)
    console.log(storage)
    console.log(selectedram);
    return (
        <div className='bg-emerald-500 w-64 h-screen  pl-2 pr-4 '>
            <h1 className=' font-extrabold text-emerald-950 mt-2'>Filter</h1>
            {/* Brands */}
            <div className='mt-4 mb-4'>
                <h1 className='font-bold text-emerald-950'>Brands</h1>

                {
                    brand.map((brand, id) => (
                        <div key={id} >
                            <label className='flex'>
                                <input type="checkbox" className='mr-2'
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => setSelectedBrands(selectedBrands.includes(brand) ? selectedBrands.filter((b) => b !== brand) : [...selectedBrands, brand])} />
                                <p className=''>{brand}</p>
                            </label>
                        </div>
                    ))
                }
            </div>
            {/* Price range */}
            <div className='mt-4 mb-4'>
                <h1 className='font-bold text-emerald-950'>Price</h1>
                <input type="range" className='w-full' min={min} max={max} value={priceRange[1]} onChange={(e) => { setPriceRange([min, parseInt(e.target.value)]) }} />
                <div className='flex justify-between'>
                    <span>RS.{priceRange[0]}</span>
                    <span>RS.{priceRange[1]}</span>
                </div>

            </div>
            {/* Ram */}
            <div className='mt-4 mb-4'>
                <h1 className='font-bold text-emerald-950'>Ram</h1>
                <select className='w-full p-2 bg-white outline-none rounded mt-1' value={selectedram} onChange={(e) => setSelectedRam(e.target.value ? parseInt(e.target.value) : null)}>
                    <option value="">ALL</option>
                    {
                        ram.map((ram) =>
                        (
                            <option key={ram} value={ram}>{ram} GB</option>
                        ))
                    }
                </select>

            </div>
            {/* Storage */}
            <div className='mt-4 mb-4'>
                <h1 className='font-bold text-emerald-950'>Storage</h1>
                <select className='w-full p-2 bg-white outline-none rounded mt-1' value={selectedStorage} onChange={(e) => setSelectedStorage(e.target.value ? parseInt(e.target.value) : null)}>
                    <option value="" > ALL</option>
                    {
                        storage.map((storage) =>
                        (
                            <option key={storage} value={storage}>{storage} GB</option>
                        ))
                    }
                </select>


            </div>

        </div >

    )
}

export default Sidebar