import React from 'react'; 
import Group from './Group'; 
import Query from './Query'
import {Button, Paper} from '@mui/material'; 


function App() {

   
  const [queries, setQueries] =  React.useState([]);
  const [groups, setGroups] = React.useState([{
    timeStamp:Date.now()
    }]); 
  function addGroup()
    {
        const group={
            timeStamp:Date.now(),
       }; 
       setGroups([...groups, group]); 
        
    }
  
  return (
    
    <Paper scroll sx={{position:'fixed', width:'100%', height:'100%', background:'#000000', }}>
      <Query queries={queries}></Query>
      {
        groups.map((element)=><Group queries={queries} setQueries={setQueries}  groups={groups} setGroups={setGroups} timeStamp={element.timeStamp} ></Group>)
      }

      
      <Button onClick={addGroup}>Add Group</Button>
      <Button color="primary">Finish</Button>
    </Paper>
  );
}

export default App;
