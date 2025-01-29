import react from 'react'
import './App.css'
import Header from './Components/Header_section/Header'
import Sidebar from './Components/Sidebar_section/Sidebar'
import Services from './Components/Services_section/Services'
import Order from './Components/Order_section/Order'
// import Progress from './Components/Progress_section/Progress'
import Footer from './Components/Footer/Footer'
import { IoCalendarClearOutline } from "react-icons/io5";
import { Progress } from './Components/Progress_section/Progress'


function App() {

  return (
    <>
    <div className='parent-tag'>
    <div className='header'>
    <Header />
    </div>
    <div className='home_content'>
    <div className='sidebar'>
    <Sidebar />
    </div>
    <div className='right_content'>
    <div className='services'>
      <Services />
    </div>
    <div className='brances_btns'>
      <div>
        <select name="" id="All_Branches"><option value="">All branches</option></select>
      </div>
      <div className='brances_btns' style={{gap:'20px'}}>
      <div>
        <select name="" id="All_Branches"><option value="">Custom range</option></select>
      </div>
      <div><button id='calender'>March 2020 <IoCalendarClearOutline/></button></div>
      </div>
    </div>
    <div className='order'>
      <Order />
    </div>
    <div className='progress'>
      <Progress/>
    </div>
    </div>
    </div>
    <div className='footer'>
    <Footer />
    </div>
    </div>
    </>
  )
}

export default App
