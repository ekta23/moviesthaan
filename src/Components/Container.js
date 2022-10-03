import React, { useEffect } from "react";
import "./Container.css";
import MovieCard from "./MovieCard";
import moviesData from "../moviesData";
import {useState} from "react";
import TrendingContainer from "./TrendingContainer";
import CategoryConatiner from "./CategoryContainer";
import searchIc from "../search.png"
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

function Container(){
    const [clickedCat,setClickedCat]=useState([]);
    const [id,setId]=useState([]);

    function handleCategoryClick(event){
        if(clickedCat.length===0)
        setMovies(moviesData.data);
        let clickedCategory=event.target.value;
        if(clickedCat.includes(clickedCategory)){
            let idx=clickedCat.indexOf(clickedCategory);
            let temp=[...clickedCat];
            temp.splice(idx,1);
            setClickedCat(temp);
            
            let temp1=moviesData.data;
            for(let i of temp){
                
                let temp2=temp1.filter(element=>{
                    let categories=JSON.parse(element.genres).map(genre=>genre.name);
                    return categories.includes(i);

            
        })
                

                setMovies(temp2);
            }
            if(temp.length===0)
            setMovies(moviesData.data);
  
        }
        else{
            try {
                let temp=[...clickedCat];
                temp.push(clickedCategory);
                setClickedCat(temp);
                let tempId=[...id];
                console.log(tempId,"temp Id",movies.length);
                let temp1=moviesData.data.filter(element=>{
                let categories=JSON.parse(element.genres).map(genre=>genre.name);
                
                //console.log(element.id in id,"element id",element.title,"title");
                if(tempId.includes(element.id)){
                    return false;
                }
                else{
                    if(categories.includes(clickedCategory)){
                        tempId.push(element.id);
                        return true;

                    }
                    return false;
                }
                
            })
            

                setId(tempId);
                
                if(temp.length>1)
                temp1=[...temp1,...movies];
                
                setMovies(temp1);
                
            } catch (error) {
                console.log(error);
            }
            
        }
        
        
    }
    const [search,setSearch]=useState("");
    const [movies,setMovies]=useState([]);
    function handleChange(event){

        const value=event.target.value;
        setSearch(value);
        if(event.keyCode===8){ // 8 key code is for backspace on backspace display all the data
            console.log("in backspace method",value);
            setMovies(moviesData.data);
        }
        else{
            console.log("in else",value);
            const movieSearch=movies.filter(element=>
                element.title.toLowerCase().includes(value.toLowerCase())
    
            )
            
            setMovies(movieSearch);

        }
        
    }
    function handleSearch(){
        
    }


    
    useEffect(()=>{
        setMovies(moviesData.data);
    },[]);
    var movieElements=movies.map(element=>{
       

        return(
            <MovieCard genres={element.genres} release_date={element.release_date} runtime={element.runtime} overview={element.overview} image={element.poster_path}  title={element.original_title}  rating={element.vote_average} vote={element.vote_count}/>
        )
    })
    
    
    return(
        <>
        <CategoryConatiner handleClick={handleCategoryClick} clickedCat={clickedCat}/>
        <div className="search-div">
            <input onKeyDown={handleChange} onChange={handleChange} value={search}  type="text" className="input-search" placeholder="Enter any movie to search"></input>
            <img src={searchIc} onClick={handleSearch}  className="search-btn"></img>
        </div>
        
        <TrendingContainer/>
        <div className="movie-container">
        
        {movieElements}


        </div>

        </>
        
    )
}
export default Container;