import React from 'react'
import style from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image'


const Virtual = () => {
  return (
    <div className={style.virtual}>
        <div className={style.left}>
            <span>Virtual Try-On</span>
            <span>Never Buy the wrong Shade Again!</span>
            <span>Try Now</span>
            <img src={Shade} alt="" />
        </div>

        <div className={style.right}>
            <div className={style.wrapper}>
                <ReactCompareImage leftImage={Before}  rightImage={After}/>
            </div>
        </div>
    </div>
  )
}

export default Virtual
