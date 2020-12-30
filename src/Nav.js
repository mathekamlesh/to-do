import React from 'react';
import './Nav.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';

const Nav = ({username,handleAccountClick}) => {
    return ( 
        <div className="nav">            
            <div className="nav__item">
                <ListIcon  style={{height:50,width:50,right:0}}/>
            </div>
            <div className="nav__item">
                <div className="nav__username">{username}</div>
            </div>
            <div className="nav__item">
                <AccountCircleIcon onClick={()=>{handleAccountClick()}} style={{height:50,width:50,right:0}} />
            </div>                  
        </div>
     );
}
 
export default Nav;