import React from 'react';
import Details from './Details';
import {useLocation,useHistory} from 'react-router-dom'
import AdminControl from './AdminControl';

const ShowData=()=>{
    const location=useLocation();
    // console.log("just checking the id",location.state.datacheck._id)
    return(
        <div style={{backgroundColor:'#89CFF0', height:'1650px'}}>
        {location.state.datacheck.role===0?<Details

        />:<AdminControl/>}

        
        </div>
    )
}
export default ShowData;