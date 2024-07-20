import React from 'react'
import css from "../style/Cover.module.css"

function Cover() {
  return (
    <div className={css.cover}>
      <h2>LAT APPAREL</h2>
      <p className={css.para}>Soak up The Sun</p>
      <h5>In style this summer with 3502 Ladies vintage wash tee</h5>
      <button className={css.btn}>SHOP NOW</button>
      <p className={css.left}>3502 IN WASHED MAUVELOUS AND WASHED BLACK</p>
      {/* <span ></span> */}
    </div>
  )
}

export default Cover
