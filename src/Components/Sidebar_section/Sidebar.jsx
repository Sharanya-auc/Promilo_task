import React from "react";
import "../Sidebar_section/sidebar.css";
import { FaHandsClapping } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import Pending from "../Sidebar_section/Pending";



const Sidebar = () => {
let obj = [
  {
    "id" : 1, 
    "Action_code" : "trd35468",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 2, 
    "Action_code" : "33255577",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 3, 
    "Action_code" : "76298347",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 4, 
    "Action_code" : "65873428",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 5, 
    "Action_code" : "trd35468",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 6, 
    "Action_code" : "33255577",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 7, 
    "Action_code" : "76298347",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  },
  {
    "id" : 8, 
    "Action_code" : "65873428",
    "files" : "2 files are waiting to be uploaded wait...",
    "days_left":"10 days left"
  }
]

  return (
    <>
      <div className="sidebar_main">
        <div className="welcome">
          <p><FaHandsClapping style={{color:'gold'}}/> Welcome back, <b>Michael</b><br /><span style={{color:'gray',fontSize:'15px'}}>25 May 2023 - Tuesday</span></p>
        </div>
        <div className="wallet">
          <div className="mywallet">My Wallet <div><FaWallet style={{color:'rgb(150, 9, 150)'}}/></div></div>
          <span style={{fontSize:'28px'}}><FaRupeeSign style={{fontSize:'22px'}}/>2,50,000</span>
          <span style={{color:'gray',fontSize:'12px'}}>Current Balance</span>
          <span>Running low ? <a style={{color:'rgb(131, 3, 131)',cursor:'pointer'}}><u>Notify admin</u></a> now.</span>
        </div>
        <div className="pending">
          <div style={{fontSize:'20px',position:'sticky'}}>Pending Actions</div>
          <div>
            <Pending objlist = {obj}/>
          </div>
        </div>
      </div>
    </>
  );
};   

export default Sidebar;
