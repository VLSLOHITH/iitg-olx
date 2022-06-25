import React, { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Posts from '../../posts/posts';
import Sidebar from '../../sidebar/sidebar';
import Topbar from '../../topbar/topbar';
import './home.css';
class Home extends Component {
    render() { 
        return (
        <> <Topbar/>
        <Header/>
        <div className='home'>
            <Footer/>
        </div></>);
    }
}
 
export default Home;