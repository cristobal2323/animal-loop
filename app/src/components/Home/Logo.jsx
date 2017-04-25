import React from 'react'
import Env from '../../Config'

class Logo extends React.Component {
  constructor() {
    super()

  }
  render() {
	return (
	    <div className='module__logo'> 
	    	<img src={`${Env.url}/dist/images/logos/logo.png`} alt="logo" /> 
	    </div>
    )
  }
}

export default Logo