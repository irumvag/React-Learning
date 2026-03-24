import React from "react"

export default function Count() {
    const [count, setCount] = React.useState(0)
    
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    const [isGoingOut,setIsGoingOut] = React.useState(true)
    function handleClick(){
        setIsGoingOut(prevIsGoingOut=>!prevIsGoingOut)
    }
    function add(){
        setCount(prevCount=>prevCount+1)
    }
    function subtract(){
        setCount(prevCount=>prevCount-1)
    }
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={subtract} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
            <hr />
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={handleClick} className="value">{isGoingOut?"Yes":"No"}</button>
        </main>
    )
}
