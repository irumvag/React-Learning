import React from "react";
export default function CreatePassword(){
    const [isDisabled,setDisabled] = React.useState(false)
    const [password,setPassword] = React.useState()
    const [checkPass,setCheckPass] = React.useState({
        check8Char:false,
        checkUppercase:false,
        checkLowercase:false,
        checkDigit:false,
        checkSpecial:false
    })
    function handleSubmit(){   
        alert("Password Accepted") 
    }
    function handleChange(e){
        let newState={};
        for(let i of Object.entries(checkPass)){
           if(i[0]=='check8Char'){
            let elem=document.getElementById('check8Char');
           }else if(i[0]=='checkUppercase'){
            let elem=document.getElementById('checkUppercase');
           }else if(i[0]=='checkLowercase'){
            let elem=document.getElementById('checkLowercase');
           }else if(i[0]=='checkDigit'){
            let elem=document.getElementById('checkDigit');
           }else if(i[0]=='checkSpecial'){
            let elem=document.getElementById('checkSpecial');
           }
        }
        let elem=document.getElementById('check8Char');
        elem.checked=elem.checked?false:true;
        //background-color: #21222A;
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
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="check8Char" id="check8Char" value='At least 8 characters'/>At least 8 characters</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkUppercase" id="checkUppercase" value='Contain uppercase character'/>Contain uppercase character</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkLowercase" id="checkLowercase" value='Contain lowercase character'/>Contain lowercase character</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkDigit" id="checkDigit" value=''/>Contain digit</label>
                <label htmlFor="Password Requirement" className="radioButton"><input type="radio" disabled  name="checkSpecial" id="checkSpecial" value=''/>Contain special character</label>
            </label>
            </div>
            <label htmlFor="submit">
                { isDisabled ?(<button className="submitButton">Submit</button>):
                    (<button disabled className="submitButton">Submit</button>)
                }
            </label>
        </form>
        </>
    )
}