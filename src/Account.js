import React, { useState } from 'react';
import './Account.css';
import { Button } from '@material-ui/core';
const Account = ({closeAccount,handleSignup}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    return ( 
        <div className="account">
            <div className="account__signup">
                <div className="account__signupFields">
                    <input className="account__signupFields__username" placeholder="username" onChange={(event)=>setUsername(event.target.value)}/>
                    <input className="account__signupFields__password" placeholder="password" type="password" onChange={(event)=>setPassword(event.target.value)} />
                    <Button variant="contained" 
                        style={{
                            borderRadius: 32,
                            backgroundColor: "#237afc",
                            padding: "16px 32px",
                            fontSize: "18px"
                        }} 
                        onClick={()=>{handleSignup(username,password)}} color="primary" size="large" 
                        >Signup</Button>
                </div>
            </div>
            <div onClick={()=>{closeAccount()}} className="account__overlay"></div>
        </div>
     );
}
 
export default Account;