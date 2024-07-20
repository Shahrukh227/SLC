import React, { useState } from 'react'
import head from "../assets/logo.jpeg"
import css from "../style/Header.module.css"
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



function Header({setSearch , setSignin ,setItems,bagNum,showItems}) {



const clickedSearch= ()=>{
setSearch(true)
}

const clickedSignin = ()=>{
  setSignin(true)
  console.log(showItems)
}

const [hide ,setHide] = useState(false)

const clickingHideBar = ()=>{
hide ? setHide(false) : setHide(true)
}


const ItemsAdded = ()=>{
  setItems(true)
}

const [extension , setExtension] = useState (false)

const clickedBrowse = ()=>{
extension ? setExtension(false) : setExtension(true)

}


const [closingMenu , setClosingMenu] = useState(false)

const closeMenu = ()=>{
  closingMenu ? setClosingMenu(false) : setClosingMenu(true)
  console.log("Hello")
}

  return (
    <main className={css.header}>
      <nav className={css.head}>
      <FaBars className={`${css.baricon}`} onClick={clickingHideBar}/>
        <a href=""><img src={head} alt="head" className={`${css.slc} ${hide ? css.slcextend : ""}`}/></a>

        <ul className={`${css.bar} ${hide ? css.hiddebar : ""}`}>
        
          <li>Browse Products<IoIosArrowDown />
         
          <ul className={`${css.subMenu} ${extension ? css.subMenuExten : " "} ${closingMenu ? css.subMenu : ""}`}>
          
            <li> <RxCross2 className={css.mark} onClick={closeMenu}/>Accessories</li>
            <li>Headwear</li>
            <li>Kids</li>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
          </ul>
          </li>
          <li>All Brands</li>
          <li >Shop Fabric <IoIosArrowDown />
          <ul className={css.subMenu2}>
            <li>100%Cotton</li>
            <li>100%Polyester</li>
            <li>Triblend</li>
            <li>Blends</li>
          </ul>
          </li>
          <li>New for 2024 <IoIosArrowDown />
          
          <ul className={css.subMenu3}>
<li>Headwear</li>
<li>Men</li>
<li>Women</li>
<li>Youth</li>
<li>Unisex</li>
          </ul>
          
          </li>
          <li>$.50Shirts</li>
          <li>Resources <IoIosArrowDown />
          
          <ul className={css.subMenu4}>
            <li>Our Company</li>
            <li>Return/Cancellation Policy</li>
            <li>Privacy Policy</li>
            <li>Catalog</li>
            <li>Press</li>
            <li>Sizing Chart</li>
            <li>Swatch Chart</li>
            <li>Apparel Master Chart</li>
          </ul>

           </li>
        </ul>
<div >
<span className={css.icons} onClick={clickedSearch}><CiSearch className={css.search}/> <span className={css.iconText}>Search 
  </span>
</span>
<span className={css.icons} onClick={clickedSignin}><IoPersonOutline className={`${css.search} ${css.signin}`} /><span className={css.iconText}>Sign in
  </span>
</span>
<span className={css.icons} onClick={ItemsAdded} ><FiShoppingBag className={`${css.search}`}/>{bagNum.length}</span>
</div>

      </nav>
    </main>
  )
}

export default Header
