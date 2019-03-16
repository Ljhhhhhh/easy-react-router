import React, { Component } from 'react'

export default class UserDetail extends Component {

  render() {
    console.log(this.props.match.params)
    return (
      <div>
        Detail {this.props.match.params.id}
      </div>
    )
  }
}
