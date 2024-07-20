import React, { useRef } from 'react'
import css from "../style/Sign.module.css"

function Sign({sign,setSignin}) {

  const signed = useRef();

  const disableSign = ()=>{
    setSignin(false)
  }
  return (
    <div className={`${css.signin} ${sign ? "" : css.hide}`} ref={signed} onClick={disableSign}>
      <div className={css.div}>
        <p>Sign-in into Your Account</p>
        <form action="" className={css.forms}>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id='email'/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id='password'/>
        </form>
        <a href="" className={css.forgot}>Forgot Password</a>
<div className={css.button}>
<button className={css.sign}>SIGN IN</button>
        <button className={css.create}>CREATE AN ACCOUNT</button>
</div>
        
      </div>
    </div>
  )
}

export default Sign
