import { useState } from 'react'

const IngredientList = (props) => {
    
    const btnClick = (e) => {
        props.addToBurger(e.target.value)
    }

    return (
        <>
            <ul>
                {props.availableIngredients.map((ingredient, idx) => {
                    return (
                        <li style={{color: ingredient.color}} key={idx}>
                            {ingredient.name}
                            <button value={idx} onClick={btnClick}>+</button>
                        </li>
                    )
                })}    
            </ul>
        </>
    )    
};
  
export default IngredientList;