import Header from "./Components/Header"
import Cover from "./Components/Cover"
import Conatct from "./Components/Conatct"
import Shop from "./Components/Shop"
import Brands from "./Components/Brands"
import Products from "./Components/Products"
import ProductsList from "./Components/ProductsList"
import Register from "./Components/Register"
import Digital from "./Components/Digital"
import Follow from "./Components/Follow"
import Footer from "./Components/Footer"
import Search from "./Components/Search"
import { useEffect, useState } from "react"
import Sign from "./Components/Sign"
import BagItemsShow from "./Components/BagItemsShow"


function App() {

  const [bagNum , setBagNum] = useState([])
 
  const [search ,setSearch] = useState(false);

  const [sign ,setSignin] = useState(false);

  const [items , setItems] = useState(false);

  const products = [{
    id : "0",
    img : "hat1.jpg",
    name : "Peter Grimm - Pool Shark - SUB4136",
    price : 200
  },{
    id : "1",
    img : "hatcream.jpg",
    name : "Peter Grimm - Cream Shark - SUB4136",
    price : 100
  },{
    id : "2",
    img : "hatblack.webp",
    name : "Peter Grimm - Black Shark - SUB4136",
    price : 300
  },{
    id : "3",
    img : "hatbrown.webp",
    name : "Peter Grimm - Brown Shark - SUB4136",
    price : 200
  },{
    id : "4",
    img : "hatgray.jpg",
    name : "Peter Grimm - Gray Shark - SUB4136",
    price : 250
  },{
    id : "5",
    img : "hatwhite.jpg",
    name : "Peter Grimm - White Shark - SUB4136",
    price : 200
  },{
    id : "6",
    img : "hat1.jpg",
    name : "Peter Grimm - Pool Shark - SUB4136",
    price : 240
  },{
    id : "7",
    img : "hatcream.jpg",
    name : "Peter Grimm - Cream Shark - SUB4136",
    price : 280
  },{
    id : "8",
    img : "hatblack.webp",
    name : "Peter Grimm - Black Shark - SUB4136",
    price : 200
  },{
    id : "9",
    img : "hatbrown.webp",
    name : "Peter Grimm - Brown Shark - SUB4136",
    price : 290
  },{
    id : "10",
    img : "hatgray.jpg",
    name : "Peter Grimm - Gray Shark - SUB4136",
    price : 280
  },{
    id : "11",
    img : "hatwhite.jpg",
    name : "Peter Grimm - White Shark - SUB4136",
    price : 300
  }]

  const [showItems , setShowItems] = useState(products);

 
  return (
    <>
    <Header setSearch={setSearch} setSignin={setSignin} setItems={setItems} bagNum={bagNum} showItems={showItems}/> 
    <Search search={search} setSearch={setSearch}/>
    <Sign sign={sign} setSignin={setSignin}/>
    <BagItemsShow items={items} setItems={setItems} products={products} bagNum={bagNum}/>
    <section className="container">
    <Cover/>
    <Conatct/>
    <Shop/>
   <Brands/>
   <Products/>
  <ProductsList setBagNum={setBagNum} products={products}/>
  <Register/>
  <Digital/>
  <Follow/>
  
    </section>
    <Footer/>
   
    </>
  )
}

export default App
