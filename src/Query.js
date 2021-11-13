import {TextField} from '@mui/material'; 
import React from 'react';


export default function Query(props)
{
    

    return(
        props.queries.map((query)=><TextField id="outlined-basic" label="Query" variant="outlined" multiline value={query.query}/>)

    ); 
    
    
}