import React from 'react'
import style from './Header.module.css'
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <img src={Logo} alt="" />
            <span> Fashion</span>
        </div>

        <div className={style.right}>

            <div className={style.menu}>
                <ul className={style.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>Eng</li>
                </ul>
            </div>
            <input type="text" className={style.search}  placeholder='Search'/>

            <CgShoppingBag className={style.cart} />
        </div>
    </div>
  )
}

export default Header
