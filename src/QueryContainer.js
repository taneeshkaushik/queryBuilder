import {TextField, Button, Paper} from '@mui/material';
export default function QueryContainer(props)
{
    var label="Query" + props.index;
    function copyQuery()
    {
        navigator.clipboard.writeText(props.query); 
        alert(`query ${props.index} copied`); 
    }
    return(
        <Paper sx={{background: '#3333ff'}}>
        <TextField  sx={{marginLeft:'5%',  marginTop:'2%', marginBottom:'2%', marginRight: '5%', width: '80%'}}
             id="outlined-basic" label={label} variant="outlined" multiline value={props.query}/>
        <Button onClick={copyQuery} sx={{marginTop: '2.5%', marginRight: '2%'}} color="secondary" variant="contained"> Copy</Button>
        </Paper>
    );
}
