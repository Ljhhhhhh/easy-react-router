import React, { Component } from 'react'
import {Link} from './react-router-dom'

export default class UserList extends Component {
  render() {
    return (
      <div>
        <li><Link to="/user/detail/1">用户1</Link></li>
        <li><Link to="/user/detail/2">用户2</Link></li>
        <li><Link to="/user/detail/3">用户3</Link></li>
      </div>
    )
  }
}
