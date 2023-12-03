import React, { Component } from 'react'
import Book from './Book.gif'
import './Loader.css'

export class Loader extends Component {
  render() {
    return (
      <div className='loader-container d-flex justify-content-center align-items-center'>
        <img src={Book} alt="Loading.." />
      </div>
    )
  }
}

export default Loader