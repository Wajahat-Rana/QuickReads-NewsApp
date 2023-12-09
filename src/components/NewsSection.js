import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from 'react-infinite-scroll-component'

const NewsSection = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)

   const updatePage = async()=>{
    props.setProgress(10)
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(apiUrl);
    props.setProgress(30)
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)

  }

  useEffect(() => {
      updatePage();
  }, [])
  
  const fetchMoreData = async()=>{
    setLoading(true)
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  // const handlePrevious = async () => {
    // setPage(page-1)
  // updatePage();
  // };
  // const handleNext = async () => {
    // setPage(page+1)
  //   updatePage();
  // };

    return (
     <>
        <h1 style={{fontSize: '2rem',margin:'15px 0px'}}  className="text-center my-6">QuickReads-Headlines</h1>
        {loading && <Loader/>}
        <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults}
    loader={loading &&  <Loader/>}
    scrollableTarget="scrollableDiv"
  >
    <div className="container">
        <div className="row">
          {articles.map((article,index) => {
            return (
              <div className="col-md-4" key={`${article.url}_${index}`}>
                <NewsItem
                  imgUrl={article.urlToImage}
                  title={
                    article.title
                      ? article.title.slice(0, 45)
                      : "Alibaba Stock Is Falling. It Lost Its Crown"
                  }
                  description={
                    article.description
                      ? article.description.slice(0, 140)
                      : "Click ReadMore to see details"
                  }
                  newsUrl={article.url} source = {article.source.name?article.source.name:'Unknown'} author = {article.author?article.author:'Unknown'} dated = {new Date(article.publishedAt).toUTCString()}
                />
              </div>
            );
          })}
        </div>
        </div>
  </InfiniteScroll>

        {/* {!loading && <div className="container my-4 d-flex justify-content-around">
          <button disabled={page <= 1} onClick={handlePrevious} type="button" className="btn btn-dark">
            &larr; Previous
             </button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize) } onClick={handleNext} type="button" className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
  } */}
      </>
    );
}
export default NewsSection
