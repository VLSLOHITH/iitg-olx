import React, { Component } from 'react';
import './sidebar.css';
class Sidebar extends Component { 
    render() { 
        return (
            <div className='sidebar'>
                <div className='sidebarItems'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQEHTd1x6_RBng/profile-displayphoto-shrink_200_200/0/1604563165430?e=1659571200&v=beta&t=JF2apw9wzmYXuYjRqv-nNCPHdBH1BosNK_qn4ykpr4g' alt=''/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='sidebarItems'>
                    <div className='sidebarTitle'>CATEGORIES</div>
                    <ul className="sidebarLists">
                        <li className="sidebarListItems">Life</li>
                        <li className="sidebarListItems">Sports</li>
                        <li className="sidebarListItems">Trips</li>
                        <li className="sidebarListItems">Music</li>
                        <li className="sidebarListItems">Tech</li>
                    </ul>
                </div>
                <div className="sidebarItems">
                    <div className="sidebarTitle">Follow us on</div>
                    <div className="sidebarSocial">
                    <i className="sideIcon fa-brands fa-facebook-square"></i>
                    <i className="sideIcon fa-brands fa-instagram-square"></i>
                    <i className="sideIcon fa-brands fa-twitter"></i>
                    </div>
                    </div>
            </div>
        );
    }
}
 
export default Sidebar;