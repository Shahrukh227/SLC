import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import css from "../style/Products.module.css"
import { CiHeart } from "react-icons/ci";

const ProductsList = ({setBagNum,products}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


  const clickingItem = (id)=>{
// console.log(id)
let newData = [...id];
setBagNum(pre=>[...pre,newData])
  }
  
  return (
    <React.Fragment>
    <div className={`${css.carousel} my-own-custom-container`}>
      <Carousel responsive={responsive}
     arrows={false} showDots={true}
       infinite={true}
       swipeable={false}
       draggable={false}
         dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  // autoPlay={true}
  customTransition="all 3s"
  containerClass="carousel-container">
        {products.map((items)=> <div className={css.box}>
        <img src={items.img} alt="hat1" />
        <p>{items.name}</p>
        <CiHeart className={css.icon} onClick={()=>clickingItem(items.id)}/>
              </div> )}
     
</Carousel>;
    </div>
    </React.Fragment>
  )
}

export default ProductsList

