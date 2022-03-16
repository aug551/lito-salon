import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Review from '../../components/Review';
import Service from '../../components/Service';
import './Home.css'
const maleServices = require('../../data/male_services.json');
const femaleServices = require('../../data/female_services.json');
const otherServices = require('../../data/other_services.json');

export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='header-container'>
          <header>
              <h2>Lito Salon, where you can get the best cut in town.</h2>
              <p>Adipisicing occaecat labore amet mollit nisi exercitation Lorem occaecat proident enim eu ipsum. Deserunt enim ad commodo nulla aute aliqua occaecat laboris id. Ullamco dolore nisi eu occaecat aliqua minim dolor cillum sunt. Id officia nisi occaecat voluptate tempor quis anim pariatur nisi incididunt aliqua in. Deserunt. </p>
              <Link to="/book">Book Now</Link>
              <Link to="/contact">Contact-Us</Link>
          </header>
        </div>
        
        <article>
            <h2>We offer a variety of services</h2>
            <Service title="Male Services" services={maleServices.services} />
            <Service title="Female Services" services={femaleServices.services} />
            <Service title="Other Services" services={otherServices.services} />
            <Link to="/services">Browse our services</Link>
        </article>
        <article>
            <h2>Reviews</h2>
            <Review name="Aaron Cruz" review="Good" />
            <Review name="Joseph Mechavez" review="Medium" />
            <Review name="Ross" review="Excellent" />
        </article>
      </div>
      
    )
  }
}
