import {TextField} from '@mui/material';
export default function QueryContainer(props)
{
    var label="Query" + props.index;
    return(
        <TextField
                sx={{marginLeft:'5%', marginRight:'5%', marginTop:'2%'}}
             id="outlined-basic" label={label} variant="outlined" multiline value={props.query}/>
    );
}
