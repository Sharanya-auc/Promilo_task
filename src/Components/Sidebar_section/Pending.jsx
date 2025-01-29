import React from "react";
import "../Sidebar_section/pending.css"
import { FaHashtag } from "react-icons/fa";

const Pending = (props) => {
  // console.log(props.objlist[0].Action_code);
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <p>
          {props.objlist.map((e) => {
            return (
              <>
              <div className="card">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{fontSize:'18px'}}><FaHashtag style={{fontSize:'16px'}}/> {e.Action_code}</span><br />
                <button className="days_btn">{e.days_left}</button>
                </div>
                <span style={{color:'gray',fontSize:'13px'}}>{e.files}</span>
                
                </div>
              </>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default Pending;
