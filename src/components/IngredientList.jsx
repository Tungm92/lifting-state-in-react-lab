import { useState } from 'react'

const IngredientList = (props) => {
    
    const [newStack, setNewStack] = useState({})

    const handleAdd = (e) => {
        e.preventDefault();
        props.addToBurger(newStack)
        setNewStack({})
    };

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
};
  
export default IngredientList;