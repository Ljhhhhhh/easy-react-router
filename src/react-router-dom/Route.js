import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Consumer} from './context';
import pathToReg from 'path-to-regexp';

export default class Route extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (<Consumer>
      {state => {
        let {path, component: Component, exact = false} = this.props;
        let pathname = state.location.pathname || '';
        let keys = [];
        let reg = pathToReg(path, keys, {end: exact});
        keys = keys.map(item => item.name)
        let result = pathname.match(reg);
        let values = result && result.length ? result.splice(1) : [];
        let props = {
          location: state.location,
          history: state.history,
          match: {
            params: keys.reduce((obj, current, index) => {
              obj[current] = values[index];
              return obj;
            }, {})
          }
        }
        if (result) {
           return <Component {...props}></Component>
        }
        return null
      }}
    </Consumer>)
  }
}