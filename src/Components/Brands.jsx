import React, { useRef } from 'react'
import css from "../style/Brands.module.css"
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import brand1 from "../assets/brand3.jpg"
import brand2 from "../assets/brand4.png"
import brand3 from "../assets/brand5.jpg"
import brand4 from "../assets/brand6.jpg"
import brand5 from "../assets/brad7.jpg"
import brand6 from "../assets/brand8.webp"
import brand7 from "../assets/brand9.png"
import brand8 from "../assets/brand10.jpg"
import brand9 from "../assets/brand11.webp"
import brand10 from "../assets/brand22.png"
import brand11 from "../assets/bran12.png"

function Brands() {

  const Slider = useRef();
  let tx = 0;

  const forwardMove = ()=>{
if(tx > -120){
  tx -= 13
}

Slider.current.style.transform = `translate(${tx}%)`
  }

  const backwardMove = ()=>{
    if(tx < 0){
      tx += 13
    }
    Slider.current.style.transform = `translate(${tx}%)`
  }
  return (
    <div className={css.brands}>
      <h2>Our Brands
      </h2>
      <div className={css.forwardarrow}>
      <SlArrowRight className={css.arrow} onClick={forwardMove}/>
      </div>

      <div className={css.bakwardarrow}>
      <SlArrowLeft className={css.arrow} onClick={backwardMove}/>
      </div>

      <div className={css.slider}>
        <ul ref={Slider}>
          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand1} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Ralh Lauren</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand2} alt="brand1" className={css.brandImg}/>
  </div>
  <p> Champion</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand3} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Lacoste</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand4} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Suhasini</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand5} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Aquiliq</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand6} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Superum</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand7} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Monte Carlo</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand8} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Rose</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand9} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Wild West</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand10} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Puma</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand11} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Converse</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand1} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Ralh Lauren</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand2} alt="brand1" className={css.brandImg}/>
  </div>
  <p> Champion</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand3} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Lacoste</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand4} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Suhasini</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand5} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Aquiliq</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand6} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Superum</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand7} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Monte Carlo</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand8} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Rose</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand9} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Wild West</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand10} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Puma</p>
</div>
          </li>

          <li>
<div className={css.slide}>
  <div className={css.brand1}>
  <img src={brand11} alt="brand1" className={css.brandImg}/>
  </div>
  <p>Converse</p>
</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Brands
