import React, { Component } from 'react';
import Footer from '../../footer/footer';
import './add.css';
class ADD extends Component {
    render() { 
        return (
            <div className='add'>
                <div className='navbar'>
                <button><i class="addBack fa-solid fa-angle-left"></i></button>
                <span className='addText'>Add Item</span>
                <i class="addBars fa-solid fa-bars"></i>
            </div>
            <form className='forms'>
                <label className='addCatogary'>Catogory*</label>
                <input className='addInput'type='text'/>
                <label className='addCatogary'>Brand&Year*</label>
                <input className='addInput'type='text'/>
                <label className='addCatogary'>Description*</label>
                <input className='addInput'type='text' placeholder=' about product.....'/>
                <label className='addCatogary'>Price*</label>
                <input className='addInput'type='text'/>
                <label className='addCatogary'>Photos*</label>
                <input className='addInput'type='file' placeholder='upload Photos'/>
                <input className='submit' type='submit' value='ADD ITEM'/>
            </form>
            <div className='footer'><Footer/></div>
            </div>
        );
    }
}
 
export default ADD;