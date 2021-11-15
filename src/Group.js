import React from "react";
import { Paper, ToggleButton, ToggleButtonGroup, Button } from "@mui/material";
import Filter from "./Filter";
import QueryBuilder from "./QueryBuilder";

export default function Group(props) {
  
  const [conjuction, setConjuction] = React.useState(0);
  const [data, setData] = React.useState([
    {
      field: "Theme",
      condition: "Equals",
      criteria: "Offers",
      isFirst: "true",
    },
  ]);

  React.useEffect(() => {
      console.log("helo")
    const query = QueryBuilder(conjuction, data);
    const newQueries=[...props.queries]; 
   
    newQueries[props.index]=query;
    
    props.setQueries(newQueries); 
    
  }, [data, conjuction]);

  const handleChange = (event, newConjuction) => {
    setConjuction(newConjuction);
  };

  function addFilter() {
    const rule = {
      field: "Theme",
      condition: "Equals",
      criteria: "Offers",
    };
    setData([...data, rule]);
  }

  function deleteGroup() {
    props.setQueries([...props.queries].splice(props.index,1));
    props.setGroups([...props.groups].splice(props.index,1));
  }

  return (
    <Paper sx={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}>
      <ToggleButtonGroup
        color="primary"
        value={conjuction}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value={0}>OR</ToggleButton>
        <ToggleButton value={1}>AND</ToggleButton>
      </ToggleButtonGroup>
      {data.map((element, index) => (
        <Filter data={data} setData={setData} index={index}></Filter>
      ))}
      <Button variant="filled" color="primary" onClick={addFilter}>
        Add Filter
      </Button>

     {props.index !==0 ?  <Button variant="filled" color="secondary" onClick={deleteGroup}>Delete Group</Button>: <div></div>}
        
    </Paper>
  );
}
