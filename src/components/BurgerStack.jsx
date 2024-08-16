import { useState } from 'react'

const BurgerStack = (props) => {

    return (
        <>
            <ul>
                <h3>Your Burger</h3>
                {props.stacks.map((stack, idx) => {
                    return (
                        <li style={{ color: stack.color }} key={idx}>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};
  
export default BurgerStack;


/*

    return (
        <>
            <ul>
                <h3>Ingredients</h3>
                {props.availableIngredients.map((ingredient, idx) => {
                    return (
                        <li style={{color: ingredient.color}} key={idx}>
                            {ingredient.name}
                            <button onClick={handleAdd}>+</button>
                        </li>
                    )
                })}    
            </ul>
        </>
    )   

*/