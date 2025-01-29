import React from "react";
import "./Order.css"
import { GrDropbox } from "react-icons/gr"
import { FaClock } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { TbCalendarCancel } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6"
import { FaArrowTrendDown } from "react-icons/fa6";


const Order = () => {

  return (
    <>
      <div>
        <div style={{display: "flex",justifyContent: "space-between",fontSize: "18px"}} >
          <div>Order Details</div>
          <div style={{ fontSize: "18px" }}><a href=""><u>View All</u></a>
          </div>
          </div>
        <div className="order_details" style={{display:'flex'}}>
           <div className='order_space'>
        <div style={{display:'flex',justifyContent:'space-between'}}><div><b>18</b></div><div style={{fontSize:'25px',color:'rgb(107, 3, 138)'}}><GrDropbox/></div></div>
        <p style={{color:'gray'}}>Total orders</p>
        <div><FaArrowTrendUp style={{color:'green'}}/> <span style={{color:'gray'}}>+2.4%</span></div>
           </div>
           <div className='order_space'>
        <div style={{display:'flex',justifyContent:'space-between'}}><div><b>10</b></div><div style={{fontSize:'25px',color:'rgb(107, 3, 138)'}}><FaClock/></div></div>
        <p style={{color:'gray'}}>In progress</p>
        <div><FaArrowTrendUp style={{color:'green'}}/> <span style={{color:'gray'}}>+2.4%</span></div>
           </div>
           <div className='order_space'>
        <div style={{display:'flex',justifyContent:'space-between'}}><div><b>5</b></div><div style={{fontSize:'28px',color:'rgb(107, 3, 138)'}}><GiCardboardBoxClosed/></div></div>
        <p style={{color:'gray'}}>Completed Order</p>
        <div><FaArrowTrendUp style={{color:'green'}}/> <span style={{color:'gray'}}>+2.4%</span></div>
           </div>
           <div className='order_space'>
        <div style={{display:'flex',justifyContent:'space-between'}}><div><b>3</b></div><div style={{fontSize:'25px',color:'rgb(107, 3, 138)'}}><TbCalendarCancel/></div></div>
        <p style={{color:'gray'}}>Cancelled Order</p>
        <div><FaArrowTrendDown style={{color:'red'}}/> <span style={{color:'gray'}}>+2.4%</span></div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Order;
