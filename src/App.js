import React, { useEffect, useState } from 'react';
import api from './api/market';
import Home from './pages/home';
import { Routes, Route, Link } from "react-router-dom";
import market from './api/market';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App(props) {
  const [markets, setMarkets] = useState([])

  const retrieveMarkets = async () => {
    const response = await api.get("/markets")
    return response.data;
  }

  useEffect(() => {
    const getAllMarkets = async () => {
      const allMarkets = await retrieveMarkets();
      if (allMarkets) setMarkets(allMarkets);
    };
    getAllMarkets()
  }, [markets])

  return (
    <div className='App'>
    <Routes>
        <Route path="/" element={<Home data={market} />} />
      </Routes>
    </div>
  );
}

export default App;