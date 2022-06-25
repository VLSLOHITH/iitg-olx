import React, { Component } from 'react';
import "./header.css";
class Header extends Component {
    render() { 
        return (
            <div className='header'>
                <div className='headerTitles'>
                <span className='headerTitleSm'>React&Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImage' src='https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png' alt=''/>
            </div>
        );
    }
}
 
export default Header ;