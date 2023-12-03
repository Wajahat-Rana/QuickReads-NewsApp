import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsSection pageSize = {9}/>
      </div>
    )
  }
}

