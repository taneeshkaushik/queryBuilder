import { Stack} from '@mui/material'; 
import React from 'react';
import QueryContainer from './QueryContainer';

export default function Query(props)
{
    

    return(
        
        <Stack  sx={{ margin:'3%', borderRadius:'10px'}}  >
            {props.queries.map((query, index)=><QueryContainer
             id="outlined-basic" label="Query" variant="outlined" multiline query={query} index={index+1}/>)}
        </Stack>
       
    ); 
    
    
}