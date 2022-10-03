import React from "react";
import "./MoreDetails.css";
import Category from "./Category";
import runtimeIc from "../runtimeIcon.gif";
import { type } from "@testing-library/user-event/dist/type";
function MoreDetails(props){
    function closeCard(){
        props.setShowDetails(false);
    }
 
    
    return(
        
        <div className="more-detail-container"   onFocusOut={closeCard}>
            <div className="img-container">
                <img className="more-detail-img" src={props.movieDetails.image} ></img>

                <div className="detail-category">
                {console.log(props.movieDetails.genres,"genre")}
                
               {
               
                
                JSON.parse(props.movieDetails.genres).map(elements=>{
                    
            return <p className="category-details">{elements.name}</p>
        })}
        
                    
                </div>

            </div>
        
        <div className="detail-container">
        
            <img className="closeCard" onClick={closeCard} src="https://img.icons8.com/color/344/close-window.png"></img>
        

        
            <h1 className="movie-name">{props.movieDetails.title} ({props.movieDetails.release_date.substring(0,4)})</h1>
            <div className="overview-div">
                <p className="movie-overview">{props.movieDetails.overview}</p>
            </div>

            <h3 className="runtime">Runtime  {Math.floor((props.movieDetails.runtime)/60)}h : {(props.movieDetails.runtime%60)}m</h3>
        
            
            <button className="watch-trailer">Watch Trailer</button>
            

        </div>
        
        
        </div>
    )
}
export default MoreDetails;