import React from 'react'
import style from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {

  const transition = {duration: 3, type: "spring"}
    
  return (
    <div className={style.container}>
        {/*Left Side*/}
        <div className={style.h_sides}>
            <span className={style.text1}>Skin Protection cream</span>

            <div className={style.text2}>
                <span>Trendy Collection</span>
                <span>{" "}Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
            </div>
        </div>

        {/*Middle side hero image*/}
        <div className={style.wrapper}>
            <motion.div transition={transition} initial={{bottom: "2%"}} whileInView={{bottom: "0rem"}} className={style.blueCircle}></motion.div>
            <motion.img transition={transition} initial={{bottom: "-2%"}} whileInView={{bottom: "0rem"}} src={HeroImg} alt="" width={600}/>
            <motion.div transition={transition} initial={{right: "4%"}} whileInView={{right: "2%"}} className={style.cart2}>
                <RiShoppingBagFill />
                <div className={style.signup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BsArrowRight />
                    </div>
                </div>
            </motion.div>
        </div>

        {/*right side*/}
        <div className={style.h_sides}>
            <div className={style.traffic}>
                <span>1.5M</span>
                <span>Monthly Traffic</span>
            </div>

            <div className={style.costumers}>
                <span>100K</span>
                <span>100 Happy Costumers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
