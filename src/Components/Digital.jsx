import React from 'react'
import css from "../style/Digital.module.css"


function Digital() {
  return (
    <div className={css.digital}>
      <h2>Exciting News</h2>
      <h3>Exciting News</h3>
      <h4>SLC Activewear is now on DGI Apparel</h4>
      <p>DGI's easy-to-use platform now includes SLC Activewear,making it simpler than ever to shop from all your trusted vendors.Find your favorite items today!</p>
      <button className={css.btn}>connect your account</button>
    </div>
  )
}

export default Digital
