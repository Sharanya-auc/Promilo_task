import React from "react";
import Cards from "../Services_section/Cards"

const Services = () => {
  let card_data = ["Contract Execution Upload","E-stamp Services","E-Sign Services"]
  return (
    <>
      <div >
        <div style={{fontSize:'20px'}}>
        Frequently Used
        </div>
        <div style={{marginTop:'10px'}}>
          <Cards cardObj = {card_data}/>
        </div>
        </div>
    </>
  );
};

export default Services;
