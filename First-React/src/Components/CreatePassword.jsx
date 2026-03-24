import React from "react";
export default function CreatePassword(props){
    function handleSubmit(){
        
    }
    return (
        <>
        <form action={handleSubmit}>
            <label htmlFor="password">
                <input type="password"  />
            </label>
        </form>
        </>
    )
}