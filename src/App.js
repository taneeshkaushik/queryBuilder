import React from 'react'; 
import Group from './Group'; 
import Query from './Query'
import {Button, Paper,Slide} from '@mui/material'; 


function App() {

   
  const [queries, setQueries] =  React.useState([]);
  const [groups, setGroups] = React.useState([0]);

  function addGroup()
    {
      var newGroups=[...groups, 0];  
      setGroups(newGroups); 
    }
  
  function copy()
  { 
    navigator.clipboard.writeText(queries); 
    alert(" Queries copied in an array"); 
    // here we can access the queries easily. 
  }

  function deleteGroup(index) {

    var newQueries=[...queries]; 
    newQueries.splice(index,1); 
    var newGroups=[...groups]; 
    newGroups.splice(index, 1); 
    setQueries(newQueries);
    setGroups(newGroups);
    
  }

  return (
    
    <Paper  sx={{position:'fixed', width:'100%', height:'100%', background:'#000000', overflow:'scroll'}}>
      <Query  queries={queries}></Query>
      
      {
        groups.map((element, index)=><Group queries={queries} setQueries={setQueries} groups={groups} setGroups={setGroups} deleteGroup={deleteGroup} index={index} ></Group>)
      }
      
      <Button sx={{marginLeft:'10%', marginTop:'5%'}} onClick={addGroup} color="primary" variant="contained">Add Group</Button>
      <Button sx={{marginTop:'5%', marginLeft:'65%'}} color="secondary" variant="contained" onClick={copy}>Finish</Button>
      
    </Paper>

    
  );
}

export default App;
