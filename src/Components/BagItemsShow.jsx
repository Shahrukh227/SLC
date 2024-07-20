import React, { useRef } from 'react'
import css from "../style/BagItemsShow.module.css"

function BagItemsShow({items,setItems,products,bagNum}) {

  const Bag = useRef();

const disableBag = (e)=>{
  if(e.target === Bag.current){
    setItems(false)
  }
}


  return (
    <div className={`${css.bagItemsShown} ${items ? "" : css.hide}`} ref={Bag} onClick={disableBag}>
  
      
      <p className={css.text}>There are no Items Added</p>
    </div>
  )
}

export default BagItemsShow
