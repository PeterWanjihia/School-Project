import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  //get all news
  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get(
          "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
        );
        setNews(res.data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
    return () => {};
  }, []);

  return (
    <div className="body">
      <h1>News Feed</h1>
      {loading && <h6>Loading .... </h6>}
      {news?.map((n, index) => (
        <div key={index} className="new">
          <img className="news-image" src={n.urlToImage} alt="" />
          <h5>{n.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default News;
