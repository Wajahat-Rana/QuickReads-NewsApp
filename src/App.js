import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';

const App = ()=> {
 const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <BrowserRouter>
    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
        <Navbar/>
        <Routes>
          <Route path={'/QuickReads-NewsApp'} element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="default-Name" pageSize = {15} category = "general"/>}></Route>
          <Route path={'/'} element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="default" pageSize = {15} category = "general"/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path='/general' element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="general" pageSize = {15} category = "general"/>}></Route>
          <Route path='/business' element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="business" pageSize = {15} category = "business"/>}></Route>
          <Route path='/health' element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="health" pageSize = {15} category = "health"/>}></Route>
          <Route path='/entertainment' element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize = {15} category = "entertainment"/>}></Route>
          <Route path='/science' element={<NewsSection setProgress = {setProgress} apiKey={apiKey}key="science"  pageSize = {15} category = "science"/>}></Route>
          <Route path='/technology' element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize = {15} category = "technology"/>}></Route>
          <Route path='/sports' element={<NewsSection setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize = {15} category = "sports"/>}></Route>
        </Routes>
        </BrowserRouter>


    )
}


export default App