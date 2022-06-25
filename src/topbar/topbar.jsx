import React, { Component } from 'react';
import "./topbar.css";
class Topbar extends Component {
render() { 
    return (<div className='top'>
            <div className='topLeft'>
              <input className='topRectangle' type='text' placeholder='Search ...'/>
              <i class="topSearch fa-solid fa-magnifying-glass"></i></div>
           <div className='topRight'>
            <i class="topProfile fa-solid fa-user"></i>
            <i class="topBars fa-solid fa-bars"></i>
           </div>

        </div>);
  }
}
 
export default Topbar;
