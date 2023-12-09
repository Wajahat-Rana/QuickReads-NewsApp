import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from 'react-infinite-scroll-component'

export default class NewsSection extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
  }

  async updatePage(){
    this.props.setProgress(10)
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(apiUrl);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false
    });
    this.props.setProgress(100)

  }

  async componentDidMount() {
  this.updatePage();
  }

  fetchMoreData = async()=>{
    this.setState({loading:true})
    this.setState({page : this.state.page+1})
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  // handlePrevious = async () => {
  //  this.setState({ page: this.state.page - 1})
  // this.updatePage();
  // };
  // handleNext = async () => {
  //   this.setState({ page: this.state.page + 1})
  //   this.updatePage();
  // };
  render() {

    return (
     <>
        <h1 style={{fontSize: '2rem',margin:'15px 0px'}}  className="text-center my-6">QuickReads-Headlines</h1>
        {this.state.loading && <Loader/>}
        <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length !== this.state.totalResults}
    loader={this.state.loading &&  <Loader/>}
    scrollableTarget="scrollableDiv"
  >
    <div className="container">
        <div className="row">
          {this.state.articles.map((article,index) => {
            console.log(article.url);
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

        {/* {!this.state.loading && <div className="container my-4 d-flex justify-content-around">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevious} type="button" className="btn btn-dark">
            &larr; Previous
             </button>
          <button disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) } onClick={this.handleNext} type="button" className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
  } */}
      </>
    );
  }
}
