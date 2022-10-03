import React, { useEffect,useState } from "react";
import "./CategoryContainer.css";
import Category from "./Category";
import dummyCategory from "../dummyCategory";
import moviesData from "../moviesData";


function CategoryConatiner(props){
    const [categoryData,setCategoryData]=useState([]);
    useEffect(()=>{
        let dummyData=[];
        for(let element of moviesData.data){
            let arr=JSON.parse(element.genres).map(genre=>genre.name);
            for(let i of arr){
                if(!dummyData.includes(i))
                dummyData.push(i);


            }
            
        };
        
        setCategoryData(dummyData);

    },[]);
    
    return(
        <div className="category-container">
        {
            categoryData.map(element=>{
                
                return <Category handleClick={props.handleClick} categoryObj={element} clickedCat={props.clickedCat}/>
            })
        }
            

        </div>
    )
}
export default CategoryConatiner;