import React from "react";
import "./MovieCard.css";
import MoreDetails from "./MoreDetails";
import { useState } from "react";


import {Modal} from '@mui/material';


function MovieCard(props){
    
    
      
    const [showDetails,setShowDetails]=useState(false);
    function handleClick(){
        console.log(!showDetails);
        setShowDetails(!showDetails);
         
    }
    

    return(
        <>
        {
            showDetails?
      
      <Modal
            
            open={showDetails}
            onClose={setShowDetails}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
            
          >
                
                 <center>
                 <MoreDetails movieDetails={props} setShowDetails={setShowDetails}/>
                 </center>
                
                </Modal>
       
    

            :
            <div className="movie-card">
            <img className="movie-img" src={props.image}></img>
            <div className="rating-div">
                <img className="star-icon" src="https://img.icons8.com/fluency/344/star.png"></img>
                <p className="rating">{props.rating}</p>
                <p className="vote-count">({props.vote})</p>

            </div>
            <h3 className="title">{props.title}</h3>
            <div onClick={handleClick} className="more-details">More Details</div>

        </div>
        }

        </>
        
    )
}

export default MovieCard;