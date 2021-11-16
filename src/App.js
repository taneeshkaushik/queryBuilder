import React from 'react'; 
import Group from './Group'; 
import Query from './Query'
import {Button, Paper} from '@mui/material'; 


function App() {

   
  const [queries, setQueries] =  React.useState([]);
  const firstElem=[
    {
      field: "Theme",
      condition: "Equals",
      criteria: "Offers",
      isFirst: "true",
    },
  ]; 
  const [allData, setAllData]=React.useState([firstElem]);

  function addGroup()
    {
      var newData=[...allData, firstElem];  
      setAllData(newData); 
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
    var newData=[...allData]; 
    newData.splice(index, 1); 
    setQueries(newQueries);
    setAllData(newData);
    
  }


  return (
    
    <Paper  sx={{position:'fixed', width:'100%', height:'100%', background:'#000000', overflow:'scroll'}}>
      <Query  queries={queries}></Query>

      {
        allData.map((element, index)=><Group queries={queries} setQueries={setQueries} allData={allData} setAllData={setAllData} deleteGroup={deleteGroup} index={index} element={element} ></Group>)
      }
      
      <Button sx={{marginLeft:'10%', marginTop:'5%'}} onClick={addGroup} color="primary" variant="contained">Add Group</Button>
      <Button sx={{marginTop:'5%', marginLeft:'65%'}} color="secondary" variant="contained" onClick={copy}>Finish</Button>
      
    </Paper>

    
  );
}

export default App;
