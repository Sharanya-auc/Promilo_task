import React from "react";
import "./progress.css"; 

const legendItems = [
  { label: "Initiated", color: "#E5E5E5" }, 
  { label: "Pending", color: "#9B79F8" },  
  { label: "Signed", color: "#5B21B6" },   
  { label: "Expired", color: "#E8DFF7" }, 
];

function Legend() {
  return (
    <div className="legend" style={{width:'200px',position:'relative',bottom:'100px',alignContent:'center'}}>
      {legendItems.map((item) => (
        <div key={item.label} className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: item.color }}
          ></div>
          <span className="legend-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function CircularProgress({ showPendingOrders = false, progress = 70, label = "30k" }) {
  const strokeDasharray = 282.7; 
  const strokeDashoffset = strokeDasharray - (progress / 100) * strokeDasharray; 

  return (
    <div className="circular-progress-container">
      <svg className="circular-progress-svg" viewBox="0 0 100 100">
  <circle
    className="circular-progress-background"
    strokeWidth="10"
    fill="transparent"
    r="45"
    cx="50"
    cy="50"
  />
  <circle
    className="circular-progress-bar"
    strokeWidth="10"
    strokeLinecap="round"
    fill="transparent"
    r="45"
    cx="50"
    cy="50"
    style={{
      stroke: "#E5E5E5", 
      strokeDasharray: "70 212.7", 
      strokeDashoffset: "0", 
    }}
  />
  <circle
    className="circular-progress-bar2"
    strokeWidth="10"
    strokeLinecap="round"
    fill="transparent"
    r="45"
    cx="50"
    cy="50"
    style={{
      stroke: "#9B79F8", 
      strokeDasharray: "50 232.7",
      strokeDashoffset: "-70", 
    }}
  />
  <circle
    className="circular-progress-bar3"
    strokeWidth="10"
    strokeLinecap="round"
    fill="transparent"
    r="45"
    cx="50"
    cy="50"
    style={{
      stroke: "#5B21B6", 
      strokeDasharray: "100 182.7", 
      strokeDashoffset: "-120", 
    }}
  />
  <circle
    className="circular-progress-bar4"
    strokeWidth="10"
    strokeLinecap="round"
    fill="transparent"
    r="45"
    cx="50"
    cy="50"
    style={{
      stroke: "#E8DFF7",
      strokeDasharray: "62.7 220",
      strokeDashoffset: "-220", 
    }}
  />
</svg>

      <div className="circular-progress-content">
        <div className="circular-progress-label">{label}</div>
        <div className="circular-progress-subtext">Initiated</div>
        {showPendingOrders && (
          <div className="pending-orders">20 orders</div>
        )}
      </div>
    </div>
  );
}

export function Progress() {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <h3 className="chart-title">E-sign Count</h3>
        <CircularProgress progress={70} />
        <Legend />
      </div>

      <div className="chart-card">
        <h3 className="chart-title">E-stamp Count</h3>
        <CircularProgress showPendingOrders progress={50} />
        <Legend />
      </div>
    </div>
  );
}
