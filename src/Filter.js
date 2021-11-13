/* eslint-disable default-case */
import React from "react";
import {
  Paper,
  Select,
  Grid,
  Typography,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Fields, Conditions, Criterias } from "./constants/Values";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Filter(props) {
  const [field, setField] = React.useState("Theme");
  const [condition, setCondition] = React.useState("Equals");
  const [criteria, setCriteria] = React.useState("Offers");
  const [timeStamp, setTimeStamp] = React.useState(props.element.timeStamp);

React.useEffect(()=>{
        
const rule = {
      timeStamp: timeStamp,
      field:field,
      condition: condition,
      criteria: criteria,
    };

    if(props.element.isFirst==="true")
    {
        rule.isFirst="true";
    }

    const index = props.data.findIndex(
      (element) => element.timeStamp === timeStamp
    );
    const newData = [...props.data];
    newData[index] = rule;
    props.setData(newData);
    console.log(newData);
        
    },[field,condition, criteria])

  function handleChange(event) {

    console.log("name",event.target.name);
    console.log("value", event.target.value);

    switch (event.target.name) {
      case "field":
        setField(event.target.value);
        console.log({field});
        break;
      case "condition":
        setCondition(event.target.value);
        break;
      case "criteria":
        setCriteria(event.target.value);
        
    }
    

  }

  function deleteFilter() {
    const newData = props.data.filter(
      (element) => element.timeStamp !== timeStamp
    );
    props.setData(newData);
  }
  return (
    <Paper>
      <Grid container>
        <Grid item xs={3.5}>
          <Typography>Fields</Typography>
          <Select name="field" value={field} onChange={handleChange}>
            {Fields.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>

        <Grid item xs={3.5}>
          <Typography>Condition</Typography>
          <Select
            name="condition"
            value={condition}
            onChange={handleChange}
          >
            {Conditions.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>

        <Grid item xs={3.5}>
          <Typography>Criteria</Typography>
          <Select
            name="criteria"
            value={criteria}
            onChange={handleChange}
          >
            {Criterias.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>

        <Grid item xs={0.5}>
          {props.element.isFirst === "true" ? (
            <div></div>
          ) : (
            <IconButton
              onClick={deleteFilter}
              aria-label="delete"
              color="primary"
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
