import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "../Services_section/card.css"

const Cards = (props) => {
    // console.log(props.cardObj[0]);
  return (
    <>
      <div >
        <span className="main_services" style={{display:'flex',gap:'10px',lineHeight:'22px'}}>{props.cardObj.map((Services)=>{
            return(
                <>
                
                <div className="services_cards">
                <div style={{fontSize:'17px'}}>{Services}</div>
                <div style={{color:'gray',fontSize:'12px',lineHeight:'14px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, unde!</div>
                <div><a href=""><u>Get Started<MdKeyboardDoubleArrowRight style={{position:'relative',top:'3px'}}/></u></a></div>
                </div>
            
                </>
            )
        })}</span>

        
      </div>
    </>
  );
};

export default Cards;
