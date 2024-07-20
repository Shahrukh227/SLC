import React from 'react'
import css from "../style/Products.module.css"

function Products({items}) {


  
  return (
    <div className={css.products}>
      <h2>Featured Products</h2>

      <div className={css.button}>
        <button className={css.btn1}>NEW ARRIVALS</button>
        <button className={css.btn2}>TOP SELLERS</button>
      </div>
    </div>
  )
}

export default Products
