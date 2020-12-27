import React from 'react';
import './Control.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Control = ({handleShowAddTask}) => {
    const styles =  {
          width: 100,
          height: 100,
          fill:"#ffffff",
      };
    
    return ( 
        <div className='control'>
            <div className="control__addControl" onClick={handleShowAddTask}>
                <AddCircleIcon  fontSize="large" style={styles} />
            </div>
        </div>
    );
}

export default Control;