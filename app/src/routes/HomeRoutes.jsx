import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'
import { Link } from 'react-router-dom'

export default class HomeRoutes extends Component {

  constructor() {
    super()
  }

  render() {

      return (
            <div>
            <Link to={`/`}> <i class="fa fa-eye" aria-hidden="tdue"></i></Link>
              <h1>Hola Mundo</h1>
            </div>
      )

  }

}