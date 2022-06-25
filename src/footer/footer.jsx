import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    render() { 
        return (
            <div className='foot'>
                <i class="footIcon fa-solid fa-house"></i>
                <i class="footIcon fa-solid fa-bag-shopping"></i>
                <i class="footIcon fa-solid fa-circle-plus"></i>
                <i class="footIcon fa-solid fa-heart"></i>
                <i class="footIcon fa-solid fa-comment-dots"></i>
            </div>
        );
    }
}
 
export default Footer;