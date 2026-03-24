import React from "react";
export default function CreatePassword(){
    const [checkPass,setCheckPass] = React.useState()
    const [isDisabled,setDisabled] = React.useState(true)
    function handleSubmit(){    
    }
    function handleChange(){
        
    }
    return (
        <>
       
        <form action={handleSubmit} className="formContent">
             <center>
                <h1>Create Password</h1>
                <p>Enter a secure passowrd</p>
            </center>
            <label htmlFor="password">
                <input type="password" name="password" placeholder="Enter your password" className="input" onChange={handleChange} />
            </label>
            <div className="verfication">
            <label htmlFor="password requirements">
                <h2>Password Requirement</h2>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="check8Char" id="" value='At least 8 characters'/>At least 8 characters</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkUppercase" id="" value='Contain uppercase character'/>Contain uppercase character</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkLowercase" id="" value='Contain lowercase character'/>Contain lowercase character</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkDigit" id="" value=''/>Contain digit</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkSpecial" id="" value=''/>Contain special character</label>
            </label>
            </div>
            <label htmlFor="submit">
                {/* <button {`${isDisabled?'disabled':''}`} className="input">Submit</button> */}
            </label>
        </form>
        </>
    )
}