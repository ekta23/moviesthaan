import React from "react";
import "./Category.css"

function Category(props){
    
    
    return(
        <button className={props.clickedCat.includes(props.categoryObj)?"category-selected":"category"} onClick={props.handleClick} name="category" value={props.categoryObj}>
            {props.categoryObj}

        </button>
        
    )
}
export default Category;