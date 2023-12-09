import React from "react";

const NewsItem = (props)=> {

    //Destructuring
    const { title, description, imgUrl, newsUrl , source,dated } = props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOGDG4fx_hNG4flUi0jt6XsQlO0xgdp6WgQ&usqp=CAU"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title
              ? title
              : "Gmail has 6 inbox types — here’s how to choose the one that’s right for you ↓"}
          </h5>
          <p className="card-text">
            {description
              ? description
              : "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics."}
          </p>
          <p className="card-text"><small className="text-body-secondary">{dated}</small></p>
          <p className="card-text"><small className="text-body-secondary">Source: {source}</small></p>
          <a rel="noreferrer" href={newsUrl}target="_blank" className="btn btn-sm btn-dark" >
            Read More
          </a>
        </div>
      </div>
    );

}
export default NewsItem
