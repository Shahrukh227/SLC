import React from 'react'
import css from "../style/shop.module.css"
import men from "../assets/men.webp"
import women from "../assets/women.webp"
import kids from "../assets/kids.webp"

function Shop() {
  return (
  <section className={css.shop}>

<div className={css.shopImg}>
<a href="" >
<img src={men} alt="men" className={css.img}/>
<button className={css.btn}>SHOP MEN</button>
</a>
</div>

<div className={css.shopImg}>
<a href="" >
<img src={women} alt="men" className={`${css.img} ${css.img2}`} />
</a>
<button className={css.btn}>SHOP WOMEN</button>
</div>

<div className={css.shopImg}>
<a href="" >
<img src={kids} alt="men" className={css.img}/>
</a>
<button className={css.btn}>SHOP YOUTH</button>
</div>


  </section>
  )
}

export default Shop
