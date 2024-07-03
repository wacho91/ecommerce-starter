import React from 'react'
import style from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { 
    InboxIcon,
    PhoneIcon,
    LoginIcon,
    LocationMarkerIcon,
    UserIcon,
    LinkIcon 
} from "@heroicons/react/outline"

const Footer = () => {
  return (
    <div className={style.cFooterWrapper}>
        <hr />

        <div className={style.cfooter}>
            <div className={style.logo}>
                <img src={Logo} alt="" />
                <span>Fashion</span>
            </div>

            <div className={style.block}>
                <div className={style.detail}>
                    <span>Contact Us</span>
                    <span className={style.pngLine}>
                        <LocationMarkerIcon className={style.icon} />
                        <span>111 north avenue Orlando, FL 32801</span>
                    </span>
                    <span className={style.pngLine}>
                        {" "}
                        <PhoneIcon className={style.icon} />
                        <a href="tel:352-306-4415">352-3064415</a>
                    </span>
                    <span className={style.pngLine}>
                        <InboxIcon className={style.icon} />
                        <a href="mailto:info@fashion.com">info@fashion.com</a>
                    </span>
                </div>
            </div>

            <div className={style.block}>
                <div className={style.detail}>
                    <span>Account</span>
                    <span className={style.pngLine}>
                        <LoginIcon className={style.icon} />
                        Sign In 
                    </span>
                </div>
            </div>

            <div className={style.block}>
                <div className={style.detail}>
                    <span>Company</span>
                    <span className={style.pngLine}>
                        <UserIcon className={style.icon} />
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={style.block}>
                <div className={style.detail}>
                    <span>Resources</span>
                    <span className={style.pngLine}>
                        <LinkIcon className={style.icon} />
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={style.copyRight}>
            <span>Copyright 2024 by Fashion, Inc.</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer
