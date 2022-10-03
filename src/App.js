import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import MovieCard from './Components/MovieCard';
import Container from './Components/Container';
import CategoryContainer from './Components/CategoryContainer';
import axios from 'axios';
import { useEffect } from 'react';
import TrendingContainer from './Components/TrendingContainer';
import MoreDetails from './Components/MoreDetails';

function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Container/>
      
    </div>
  );
}

export default App;
