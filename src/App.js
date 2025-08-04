import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './component/navbar';
import Newscontent from './component/Newscontent';
import LoadingBar from "react-top-loading-bar";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [Search, setSearch] = useState("india");
  const [Newsdata, setNewsdata] = useState(null);
  const [TotalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0);

  const fetchData = async () => {
    setProgress(10)
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=facf57ba0f254513942a965f5fe33709&page=${page}&pageSize=20`);
    setProgress(30)
    const news = await response.json();
    setProgress(100)
    setNewsdata(news.articles);
    setTotalResults(news.totalResults);
  }

  const handleInput = (value) => {
    setSearch(value);
    setPage(1);
  }

  const handlePrevClick = () => {
    setPage(prevPage => prevPage - 1);
  }

  const handleNextClick = () => {
    setPage(prevPage => prevPage + 1);
  }

  useEffect(() => {
    fetchData();
  }, [Search, page]);

  return (
    <div>
      <LoadingBar
      height={3}
        color="#f11946"
        progress={progress}
      />
      <Navbar getData={fetchData} handle={handleInput}/>
      <Newscontent data={Newsdata}/>
      <div className="btn-container">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&#8592; Previous</button>
        <button disabled={page >= Math.ceil(TotalResults / 20)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &#8594;</button>
      </div>
    </div>
  );
}

export default App;
