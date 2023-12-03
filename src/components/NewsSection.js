import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export default class NewsSection extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5ab58c6dffca4f698964245046bde16b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false
    });
  }

  handlePrevious = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5ab58c6dffca4f698964245046bde16b&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 ,loading : false});
  };
  handleNext = async () => {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5ab58c6dffca4f698964245046bde16b&page=${this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
      let data = await fetch(apiUrl);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      });
  };
  render() {
    return (
      <div className="container">
        <h1 style={{fontSize: '2rem',margin:'15px 0px'}}  className="text-center my-6">QuickReads-Headlines</h1>
        {this.state.loading && <Loader/>}
        <div className="row">
          {this.state.articles && !this.state.loading && this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
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
        {!this.state.loading && <div className="container my-4 d-flex justify-content-around">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevious} type="button" className="btn btn-dark">
            &larr; Previous
             </button>
          <button disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) } onClick={this.handleNext} type="button" className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
  }
      </div>
    );
  }
}
