import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <BrowserRouter>
    <LoadingBar
      color='#f11946'
      progress={this.state.progress}
      onLoaderFinished={() => this.setProgress(0)}
    />
        <Navbar/>
        <Routes>
          <Route path={'/QuickReads-NewsApp'} element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="default-Name" pageSize = {15} category = "general"/>}></Route>
          <Route path={'/'} element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="default" pageSize = {15} category = "general"/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path='/general' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize = {15} category = "general"/>}></Route>
          <Route path='/business' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="business" pageSize = {15} category = "business"/>}></Route>
          <Route path='/health' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="health" pageSize = {15} category = "health"/>}></Route>
          <Route path='/entertainment' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize = {15} category = "entertainment"/>}></Route>
          <Route path='/science' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey}key="science"  pageSize = {15} category = "science"/>}></Route>
          <Route path='/technology' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" pageSize = {15} category = "technology"/>}></Route>
          <Route path='/sports' element={<NewsSection setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" pageSize = {15} category = "sports"/>}></Route>
        </Routes>
        </BrowserRouter>


    )
  }
}

