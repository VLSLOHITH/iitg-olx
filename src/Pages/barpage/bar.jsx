import React, { Component } from 'react';
import './bar.css';
class Bar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="bar">
                <h2 className='Title'>IITG OLX</h2>
                <div className='boxes'>
                    <div className='singleBox'>
                    <i class="boxIcon fa-solid fa-user"></i>
                    <span className='boxText'>MY ACCOUNT</span>
                    </div>
                    <div className='singleBox'>
                    <i class="boxIcon fa-solid fa-bag-shopping"></i>
                    <span className='boxText'>MY ORDERS</span>
                    </div>
                    <div className='singleBox'>
                    <i class="boxIcon fa-solid fa-list-ul"></i>
                    <span className='boxText'>MY LISTINGS</span>
                    </div>
                    <div className='singleBox'>
                    <i class="boxIcon fa-solid fa-heart"></i>
                    <span className='boxText'>SAVED ITEMS</span>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default Bar;