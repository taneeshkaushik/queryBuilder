import {TextField, Stack} from '@mui/material'; 
import React from 'react';
import QueryContainer from './QueryContainer';

export default function Query(props)
{
    

    return(
        <Stack color="primary" >
            {props.queries.map((query, index)=><QueryContainer
                sx={{marginLeft:'5%', marginRight:'10%'}}
             id="outlined-basic" label="Query" variant="outlined" multiline query={query} index={index+1}/>)}
        </Stack>
    ); 
    
    
}