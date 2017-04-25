import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'
import { Link } from 'react-router-dom'

import Home from '../components/Home/'

export default class HomeRoutes extends Component {

  constructor() {
    super()
  }
  
  render() {
      return (
        <Home />
      )
  }

}