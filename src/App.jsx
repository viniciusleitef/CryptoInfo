import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Home} from './pages/Home/Home'
import {Ativos} from './pages/Ativos/Ativos'

import Header from './components/Header/Header'
import { AtivosDetalhes } from './pages/AtivosDetalhes/AtivosDetalhes';

function App() {
  const [data, setData] = useState([])
  const options = {
    method: 'GET',
    url: 'https://openapiv1.coinstats.app/coins',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'ttycL7dZqAufBppd0Utm1Wujv4OmDXA88kJF1y0T45E='
    }
  };

  useEffect(()=>{
    axios.request(options).then(function (res) {
      setData(res.data.result)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])


  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home data={data}/>}/>
          <Route path='/Ativos' element={<Ativos data={data}/>}/>
          <Route path='/Ativos/:id' element={<AtivosDetalhes/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
