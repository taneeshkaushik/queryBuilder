import React from "react";
import { Paper, ToggleButton, ToggleButtonGroup, Button } from "@mui/material";
import Filter from "./Filter";
import QueryBuilder from "./QueryBuilder";

export default function Group(props) {
  
  const [conjuction, setConjuction] = React.useState(0);
  const [data, setData] = React.useState(props.allData[props.index]);
  React.useEffect(() => {
      
    const query = QueryBuilder(conjuction, data);
    const newQueries=[...props.queries]; 
   
    newQueries[props.index]=query;
    
    props.setQueries(newQueries); 
    

  }, [data, conjuction]);


  React.useEffect(()=>{
    setData(props.allData[props.index]);
  }, [props.allData])


 

  const handleChange = (event, newConjuction) => {
    setConjuction(newConjuction);
  };



  function addFilter() {
    const rule = {
      field: "Theme",
      condition: "Equals",
      criteria: "Offers",
    };
    var newAllData=[...props.allData]; 
    var newData=[...newAllData[props.index]]; 
    newData.push(rule); 
    newAllData[props.index]= newData;
    props.setAllData(newAllData);
    
  }
  
  function deleteFilter(index)
  {
    console.log("helo"); 
    
    var newAllData=[...props.allData]; 
    var newData=[...newAllData[props.index]]; 
    newData.splice(index,1); 
    newAllData[props.index]= newData;
    props.setAllData(newAllData);
  }

  

  return (
    <Paper  sx={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%", background: '#1D2025'   }}>
    
      <ToggleButtonGroup
        color="primary"
        value={conjuction}
        exclusive
        onChange={handleChange}
        sx={{margin: '1%'}}
      >
        <ToggleButton value={0}>OR</ToggleButton>
        <ToggleButton value={1}>AND</ToggleButton>
      </ToggleButtonGroup>
      {data.map((element, index) => (
        <Filter data={data} setData={setData} index1={props.index} index={index} allData={props.allData} setAllData={props.setAllData} groups={props.groups} deleteFilter={deleteFilter} ></Filter>
      ))}
      <Button sx={{margin:'1%'}} color="primary" variant="contained" onClick={addFilter}>
        Add Filter
      </Button>
     {props.index !==0 ?  <Button sx={{margin:'1%'}} variant="contained" color="primary" onClick={()=>props.deleteGroup(props.index)}>Delete Group</Button>: <div></div>}
      </Paper>  
    
  );
}
