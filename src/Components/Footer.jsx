import React from 'react'
import css from "../style/Footer.module.css"

function Footer() {
  return (
    <footer >
    <div className={css.footer}>
    <div className={css.contact}>
      <ul>
        <li><a href="" className={css.head}>About</a></li>
        <li><a href="" className={css.body}>Our Company</a></li>
        <li><a href="" className={css.body}>Join Our Team</a></li>
        <li><a href="" className={css.body}>Request a Catalog</a></li>
        <li><a href="" className={css.body}>Masterclass Registration</a></li>
      </ul>

      <ul>
        <li><a href="" className={css.head}>Support</a></li>
        <li><a href="" className={css.body}>Customer Support</a></li>
        <li><a href="" className={css.body}>Shipping Policies</a></li>
        <li><a href="" className={css.body}>Return & Cancellations</a></li>
        <li><a href="" className={css.body}>Privacy Policy</a></li>
      </ul>

      <ul>
        <li><a href="" className={css.head}>Resources</a></li>
        <li><a href="" className={css.body}>Catalogs</a></li>
        <li><a href="" className={css.body}>Sizing Charts</a></li>
        <li><a href="" className={css.body}>Swatch Cards</a></li>
      </ul>
    </div>

    <div className={css.mail}>
      <h2>Never miss a thing!</h2>
      <p>Subscribe to our weekly newsletter.</p>
      <input type="email" name="email" className={css.email} placeholder='Enter your email address here'/>
      <button className={css.btn}>SIGN UP </button>
    </div>
    </div>
     

    <div className={css.underline}>
      <h2><span className={css.start}>SLC</span><span className={css.end}>ACTIVEWEAR</span></h2>
      <p>@2024 SLC Activewear Store.All Rights Reserved.</p>
      <p>Privacy Policy</p>
    </div>
    </footer>
  )
}

export default Footer
