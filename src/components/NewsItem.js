import React from 'react'


const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return <div>
        <div className="card text-light">
            <span className="badge bg-dark" style={{ height: "22px", zIndex: "1" }}>{source}</span>
            <img src={!imageUrl ? "https://du5jhqks4kn0y.cloudfront.net/5d7889182ff8f000702bcb08/b287c465-139b-b166-5845-8df58d9b2af8.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={url} target={"_blank"} rel="noreferrer" className="btn rounded-pill btn-dark">Read more</a>
                <p>{props.query}</p>
            </div>
        </div>
    </div>;
};

export default NewsItem;

