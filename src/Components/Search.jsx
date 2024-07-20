import React, { useRef } from 'react'
import css from "../style/Header.module.css"
import { CiSearch } from "react-icons/ci";

function Search({search,setSearch}) {

  const searchbar = useRef()

  const disbling = (e)=>{
 if(e.target === searchbar.current){
  setSearch(false)
 }
  }


    return (
    <div className={`${css.searchingbox} ${search ? "" : css.hide}`} ref={searchbar} onClick={disbling}>
 <div className={css.searching}>
    <div class="alert alert-light" role="alert">
      <div>
      <CiSearch className={css.search}/>
      <input type="search" name="search"/>
      </div>
    
    </div>
    <p>Search for Products</p>
    </div>
    </div>
   
  )
}

export default Search
