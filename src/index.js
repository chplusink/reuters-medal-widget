import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './style.css'

import MedalsTable from './components/MedalsTable'

const e = React.createElement;

class MedalWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="align-left color-gray">
        <div className="font-24">MEDAL COUNT</div>
        <MedalsTable initSort={this.props.initSort}/>
      </div>
    )
  }
}

export const initialize = (id, initSort='gold') => {
  var domContainer = (id.includes('#')) ? document.querySelector(id) : document.querySelector('#' + id);
  ReactDOM.render(<MedalWidget initSort={initSort}/>, domContainer);
}
