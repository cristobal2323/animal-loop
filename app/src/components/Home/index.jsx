import React from 'react'
import Nav from './Nav'
import Search from './Search'
import Logo from './logo'
import User from './User'

class Home extends React.Component {
  constructor() {
    super()

  }
  render() {
      return (
          <header className='module__header'>
            <Nav />
            <Search />
            <Logo />
            <User />
          </header>
      )

  }
}

export default Home