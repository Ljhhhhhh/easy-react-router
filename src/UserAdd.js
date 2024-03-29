import React, { Component } from 'react'

export default class UserAdd extends Component {
  constructor() {
    super()
    this.text = React.createRef();
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // this.text.current.value
    console.log(this.text.current.value)
    this.props.history.push('/user/list')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.text} />
        <button type="submit">提交</button>
      </form>
    )
  }
}
