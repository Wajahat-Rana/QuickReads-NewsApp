import React, { Component } from 'react'
import Book from './Book.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={Book} alt="Loading.." />
      </div>
    )
  }
}

export default Loader