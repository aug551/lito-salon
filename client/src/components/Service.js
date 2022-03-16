import React, { Component } from 'react'

export default class Service extends Component {
    RenderList(){
        let services = this.props.services.map(service => {
            return <li key={service.id}>{service.name}</li>
        })

        return services;
    } 
  render() {
    return (
      <div className='service-container'>
          <h3>{this.props.title}</h3>
          <ul>{this.RenderList()}</ul>
      </div>
    )
  }
}
