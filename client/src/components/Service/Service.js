import React, { Component } from 'react'
import './Service.css'

export default class Service extends Component {
  
  constructor(props){
    super(props);
    this.state = { isDescribed: false };

    this.showDescription = this.showDescription.bind(this);
  }

  showDescription(){
    this.setState(prevState => ({
      isDescribed: !prevState.isDescribed
    }))

    let container = document.querySelector(`#${this.props.type}`);
    container.firstChild.hidden = !this.state.isDescribed;
    container.lastChild.hidden = this.state.isDescribed;

  }
  
  RenderList(){
    let services = this.props.services.map(service => {
        return <li key={service.id}>{service.name}</li>
    })

    return services;
  }

  RenderDescription(){
    let description = this.props.services.map(service => {
      return <li key={service.id}>{service.description}</li>
    })
    return description
  }
    
  render() {
    return (
      <div className='service-container' onClick={this.showDescription}>
          <h3>{this.props.title}</h3>
          <div id={this.props.type} className='service-content-container'>
            <div>
              <ul>{this.RenderList()}</ul>
            </div>
            <div hidden>
              <ul>{this.RenderDescription()}</ul>
            </div>
          </div>
      </div>
    )
  }
}
