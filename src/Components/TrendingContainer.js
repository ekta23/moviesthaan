import React,{useState,useEffect} from "react";
import "./TrendingContainer.css";
import MovieCard from "./MovieCard";
import moviesData from "../moviesData";

function TrendingContainer(){
    const [trending,setTrending]=useState([]);
    useEffect(()=>{
        let temp=[...moviesData.data];
        temp=temp.sort((a, b) => b.vote_average - a.vote_average );
        temp=temp.slice(0,11);
        setTrending(temp);
    },[]);
    
     
    var count=1;
    return(
        <div className="main-trending">
        <h2 className="heading-2">Top 10 Movies</h2>
        <div className="trending-container">
        {
            trending.map((item)=>{
                return <div>
                <img className="trending-img" src={item.poster_path}></img>
                <div className="info-trending">
                </div>
                
                </div>
            })
        }
        </div>
        </div>
        
    )
}

export default TrendingContainer;