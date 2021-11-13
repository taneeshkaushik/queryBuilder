import React from 'react'; 
import {Paper, ToggleButton, ToggleButtonGroup, Button} from '@mui/material';
import Filter from './Filter';
import QueryBuilder from './QueryBuilder';


export default function Group(props)
{
    const [timeStamp, setTimeStamp] = React.useState(props.timeStamp); 
    const [conjuction, setConjuction] = React.useState(0);
    const [data, setData] = React.useState([{
            timeStamp:Date.now(),
            field: 'Theme',
            condition: 'Equals',
            criteria: 'Offers', 
            isFirst: 'true'
       }]);

    React.useEffect(()=>{   
        
        const query=QueryBuilder(conjuction,data);
        const groupQuery={timeStamp:timeStamp,query: query};

        const index= props.queries.findIndex(element=> element.timeStamp===timeStamp); 

        if(index===-1){
            
            props.setQueries([...props.queries, groupQuery]); 
        }
        else {
            var newQueries=[...props.queries]; 
            newQueries[index]=groupQuery; 
            props.setQueries(newQueries);
        }

    }, [data, conjuction])
    
    
    const handleChange= (event, newConjuction)=>{
        setConjuction(newConjuction); 
    }

    function addFilter()
    {
        const rule={
            timeStamp:Date.now(),
            field: 'Theme',
            condition: 'Equals',
            criteria: 'Offers'
       }; 
       setData([...data, rule]); 
        
    }

    function deleteGroup()
    {
        const newData= props.groups.filter(element=> element.timeStamp!== timeStamp);
        const newQueries=props.queries.filter(element=>element.timeStamp!==timeStamp);
        props.setQueries(newQueries) 
        props.setGroups(newData);
    }
    
    return(
        <Paper>
            <ToggleButtonGroup
                color="primary"
                value={conjuction}
                exclusive
                onChange={handleChange}>
                <ToggleButton value={0}>OR</ToggleButton>
                <ToggleButton value={1}>AND</ToggleButton>   
            </ToggleButtonGroup>
            {
                data.map((element)=><Filter data={data} setData={setData} element={element}    ></Filter>)
            }
            <Button onClick={addFilter}>Add Filter</Button>
            <Button onClick={deleteGroup}>Delete Group</Button>


            
        </Paper>
    )
    
}