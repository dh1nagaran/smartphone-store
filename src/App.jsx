import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Products from './Components/Products'
import product from './Database/data.json'
import Cart from './Components/Cart'

function App() {
  const brands = [...new Set(product.products.map((p) => p.brand))].sort()
  const [priceRange, setPriceRange] = useState([Math.min(...product.products.map((p) => p.price)), Math.max(...product.products.map((p) => p.price))])
  console.log(priceRange)
  const [selectedram, setSelectedRam] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [search, setSearch] = useState("")
  const [cartItems, setCartitems] = useState([])
  const [cartopen, setCartopen] = useState(false)
  const additem = (product) => {
    setCartitems((prev) => {
      const existingItems = prev.find((item) => item.id == product.id)
      if (existingItems) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))

      }
      return [...prev, { ...product, quantity: 1 }]
    });
    setCartopen(true)
  }
  const removeitem = (id) => {
    setCartitems((prev) => prev.filter((item) => item.id !== id))
  }
  const quantity = (id, quantity) => {
    if (quantity <= 0) {
      removeitem(id)

    }
    else {
      setCartitems((prev) => prev.map((item) => (item.id == id ? { ...item, quantity } : item)))
    }
  }
  const filterproduct = product.products.filter((product) => {
    const matches = product.brand.toLowerCase().includes(search.toLowerCase()) || product.model.toLowerCase().includes(search.toLowerCase()) || product.os.toLowerCase().includes(search.toLowerCase())
      || product.ram.toLowerCase().includes(search.toLowerCase()) || product.battery.toLowerCase().includes(search.toLowerCase());
    const matchbrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchprice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchram = selectedram == null || product.ram == selectedram;
    const matchstorage = selectedStorage === null || product.storage == selectedStorage;
    return matches && matchprice && matchram && matchstorage && matchbrand;
  });
  console.log(selectedBrands)
  console.log(brands)
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} cartItems={cartItems} setCartopen={setCartopen} />
      <div className='flex'>
        <Sidebar brand={brands} setSelectedBrands={setSelectedBrands}
          selectedBrands={selectedBrands}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedram={selectedram}
          setSelectedRam={setSelectedRam}
          selectedStorage={selectedStorage}
          setSelectedStorage={setSelectedStorage}
          setCartopen={setCartopen} />
        <div>
          {

            filterproduct.length == 0 ? (<p>Empty</p>) : <Products filterproduct={filterproduct.length} filterproducts={filterproduct} additem={additem} />
          }

        </div>
        <Cart additem={additem} cartItems={cartItems} removeitem={removeitem} quantity={quantity} cartopen={cartopen} setCartopen={setCartopen} />
      </div>


    </div>
  )
}

export default App
