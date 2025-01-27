import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './component/navbar';
import Newscontent from './component/Newscontent';

function App() {

  const API_KEY = 'bf0ab421a29842328436ed4da8fe7d7f';
  const [Search, setSearch] = useState("india");
  const [Newsdata, setNewsdata] = useState(null);
  
  const fetchData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${API_KEY}`);
    const news = await response.json();
    setNewsdata(news.articles);
  }

  const handleInput = (value) =>{
    setSearch(value);
  }

  useEffect(()=>{
    fetchData()
  },[Search])

  return (
    <div>
      <Navbar getData={fetchData} handle={handleInput}/>
      <Newscontent data={Newsdata}/>
    </div>
  );
}

export default App;
