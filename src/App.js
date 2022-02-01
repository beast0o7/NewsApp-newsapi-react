import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  Routes,
  Route
} from "react-router-dom";



  const App =() =>  {
  const pageSize=12;
  const apiKey =process.env.REACT_APP_API_KEY;
  const [progress, setProgress] =useState(0);
  const [query, setQuery] = useState("");
  // console.log(query);
  


  
    return (
      <div>
        <LoadingBar
        color='#A9A9A9'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar setQuery={setQuery}/>
        <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" query={query} category="general" />}></Route>
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" query={query} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" query={query} category="entertainment" />}></Route>
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" query={query} category="general" />}></Route>
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" query={query} category="health" />}></Route>
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" query={query} category="science" />}></Route>
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" query={query} category="sports" />}></Route>
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" query={query} category="technology" />}></Route>
            <Route exact path="/search" element={<News apiKey={apiKey} setProgress={setProgress} key="search" pageSize={pageSize} query={query} />}></Route>
        </Routes>

      </div>
    )
  }

export default App;
