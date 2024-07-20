import React from 'react'
import css from "../style/Register.module.css"

function Register() {
  return (
    <div className={css.register}>
      <div className={css.slide1}>
        <div className={css.content}>
        <h2>It's Easy to Shop With SLC!</h2>
        <button>REGISTER NOW</button>
        </div>
      </div>

      <div className={css.slide2}>
        <div className={css.content}>
        <h2>Apparel Master</h2>
        <h2>Class</h2>
        <button>REGISTER NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Register
