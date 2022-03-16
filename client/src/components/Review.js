import React, { Component } from 'react'

export default class Review extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.name}</h3>
          <p>{this.props.review}</p>
      </div>
    )

    }
}
