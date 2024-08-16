import { useState } from 'react'

const BurgerStack = (props) => {

    const btnClick = (e) => {
        props.removeFromBurger(e.target.value)
    }

    return (
        <>
            <ul>
                {props.stacks.length > 0 ? (
                    <>
                        {props.stacks.map((stack, idx) => {
                            return (
                                <li style={{ color: stack.color }} key={idx}>
                                    {stack.name}
                                    <button value={idx} onClick={btnClick}>x</button>
                                </li>
                            )
                        })}
                    </>
                ) : (
                    <h3>No Ingredients</h3>
                )}
            </ul>
        </>
    )
};
  
export default BurgerStack;