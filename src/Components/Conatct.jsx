import React from 'react'
import { FiDollarSign } from "react-icons/fi";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoShirtOutline } from "react-icons/io5";
import css from "../style/Conatact.module.css"

function Conatct() {
  return (
   <section className={css.contact}>
  <ul>
  <li><a href="" className={css.link}> <FiDollarSign className={css.icon}/>Hard-to-beat Pricing</a>Premiun products at competitive pricing</li>
  <li><a href="" className={css.link}><SlEarphonesAlt className={css.icon}/>Expert Account Managers</a>Our apparel experts are ready to assist you</li>
 <li><a href="" className={css.link}> <IoShirtOutline className={css.icon}/>Over 30 Top Brands</a>Find exactly what you need from our product library</li>
    </ul>
   </section>
  )
}

export default Conatct
