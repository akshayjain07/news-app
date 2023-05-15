import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://img.etimg.com/thumb/msid-100145274,width-1070,height-580,imgsize-2739273,overlay-etmarkets/photo.jpg": imageUrl} style={{height:"21vh", width:"21vw"}} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More !!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
