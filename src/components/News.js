import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState()
    let{query} = props;
    // const searchedNews = query;
       
    
    // console.log(searchedNews);
    
    

    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    

    const updateNews = async () => {
        props.setProgress(10);
        const apiUrl = `https://newsapi.org/v2/top-headlines\?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        props.setProgress(40);
        let title = `Daily Bugle - ${capitalizeFirstLetter(props.category)}`;
        document.title = title;
        let data = await fetch(apiUrl);
        props.setProgress(70);
        let parsedData = await data.json()
        console.log(parsedData);
        props.setProgress(80);
        setArticles(parsedData.articles)
        console.log(articles);
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    

    // const searchedNews = async () => {
    //     props.setProgress(10);
    //     const searchedNews = await query;
    //     console.log(searchedNews);
    //     const apiUrl = `https://newsapi.org/v2/everything?q=${searchedNews}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    //     setLoading(true)
    //     props.setProgress(40);
    //     // let title = await `Daily Bugle - Search for ${capitalizeFirstLetter(query)}`;
    //     // document.title = title;
    //     let data = await fetch(apiUrl);
    //     props.setProgress(70);
    //     let parsedData = await data.json()
    //     props.setProgress(80);
    //     setArticles(parsedData.articles)
    //     setTotalResults(parsedData.totalResults)
    //     setLoading(false)
    //     props.setProgress(100);
    // }

    useEffect(() => {
        updateNews();
        // searchedNews();
    }, []);

    // handlePreviousClick = async () => {
    //              setPage(page - 1)
    //              updateNews();

    // }
    // handleNextClick = async () => {
    //          setPage(page + 1)
    //          updateNews();
    //     }
    const fetchMoreData = async () => {
        setPage(page + 1)
        const apiUrl = `https://newsapi.org/v2/top-headlines\?country=${props.country}&category=${props.category}&apiKey=cc23ba878d544cc1ab1044ad6b21aacf&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let title = `Daily Bugle - ${capitalizeFirstLetter(props.category)}`;
        document.title = title;
        let data = await fetch(apiUrl);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };


    return (
        <div>


            <h2 className='text-center text-light'>Daily Bugles - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {/* {loading && <Loading />} */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}>

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3 col-sm-12" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                        <button disabled={page <= 1} type='button' className="btn btn-primary" onClick={handlePreviousClick}> &larr; Previous</button>
                        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
                    </div> */}



        </div>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "business"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;
