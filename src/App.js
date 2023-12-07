import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/QuickReads-NewsApp'} element={<NewsSection  key="default-Name" pageSize = {15} category = "general"/>}></Route>
          <Route path={'/'} element={<NewsSection  key="default" pageSize = {15} category = "general"/>}></Route>
          <Route path='/general' element={<NewsSection  key="general" pageSize = {15} category = "general"/>}></Route>
          <Route path='/business' element={<NewsSection  key="business" pageSize = {15} category = "business"/>}></Route>
          <Route path='/health' element={<NewsSection  key="health" pageSize = {15} category = "health"/>}></Route>
          <Route path='/entertainment' element={<NewsSection  key="entertainment" pageSize = {15} category = "entertainment"/>}></Route>
          <Route path='/science' element={<NewsSection key="science"  pageSize = {15} category = "science"/>}></Route>
          <Route path='/technology' element={<NewsSection  key="technology" pageSize = {15} category = "technology"/>}></Route>
          <Route path='/sports' element={<NewsSection  key="sports" pageSize = {15} category = "sports"/>}></Route>
        </Routes>
        </BrowserRouter>


    )
  }
}

