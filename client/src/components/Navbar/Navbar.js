import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {isBigNav: true}

    this.ToggleBigNav = this.ToggleBigNav.bind(this);
  }

  ToggleBigNav(){
    this.setState(prevState => ({
      isBigNav: !prevState.isBigNav
    }))

    let height = (this.state.isBigNav) ? document.querySelector('.nav-container').classList.add('bigNav') : document.querySelector('.nav-container').classList.remove('bigNav');
    document.querySelector('.nav-container').classList.add(height)
  }
  render() {
    return (
        <div className='nav-container'>
            <h1><Link to="/">Lito Salon</Link></h1>
            <button className='dropbtn' onClick={this.ToggleBigNav}>Dropdown</button>
              <nav className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/book">Book Now</Link>
                <a href='https://www.facebook.com/ttolitz/'>FB</a>
              </nav>

            <Outlet />
        </div>

    )
  }
}
