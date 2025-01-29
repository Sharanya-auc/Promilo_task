import React from 'react'
import "./footer.css"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LiaCopyrightSolid } from "react-icons/lia";


const Footer = () => {
  return (
    <>
       <div className='main_footer'>
        <div className='footer_icons'>
        <TiSocialFacebookCircular />
        <TiSocialTwitterCircular />
        <TiSocialLinkedinCircular />
        </div>
        <div><p><LiaCopyrightSolid style={{position:'relative',top:'2px'}}/> 2023 All Rights Reserved</p></div>
        </div> 
    </>
  )
}

export default Footer