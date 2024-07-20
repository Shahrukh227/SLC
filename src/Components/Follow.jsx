import React from 'react'
import newArrival from "../assets/newarrival.avif"
import css from "../style/Follow.module.css"
import Exciting from "../assets/Exciting.jpg"
import dontmiss from "../assets/dontmiss.jpg"
import sale from "../assets/sale.webp"
import digital from "../assets/dititalcloth.jpg"

function Follow() {
  return (
    <div className={css.follow}>
      <h2>Follow Us</h2>

      <ul>
        <li className={css.followImges}><img src={newArrival} alt="newArrival" className={css.images}/></li>
        <li className={css.followImges}><img src={Exciting} alt="newArrival" className={css.images}/></li>
        <li className={css.followImges}><img src={dontmiss} alt="newArrival" className={css.images}/></li>
        <li className={css.followImges}><img src={digital} alt="newArrival" className={css.images}/></li>
        <li className={css.followImges}><img src={sale} alt="newArrival" className={css.images}/></li>
      </ul>
    </div>
  )
}

export default Follow
