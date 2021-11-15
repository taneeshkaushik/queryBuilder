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

   
  var element = props.data[props.index];
  const [field, setField] = React.useState(element.field);
  const [condition, setCondition] = React.useState(element.condition);
  const [criteria, setCriteria] = React.useState(element.criteria);
  

  React.useEffect(()=>{
    
    setField(element.field);
    setCondition(element.condition);
    setCriteria(element.criteria);
      },[props.data])

  function handleChange(event) {

    var item = JSON.parse(JSON.stringify(element));
    switch (event.target.name) {
      case "field":
         item.field = event.target.value;
        break;
      case "condition":
        item.condition = event.target.value;
        break;
      case "criteria":
        item.criteria = event.target.value;
    }
    var newData = [...props.data];
    newData[props.index] = item;

    props.setData(newData);
    
    
  }

  function deleteFilter() {
    var newData =[...props.data];
    newData.splice(props.index, 1);
    props.setData(newData);
    
  }

  return (
    <Paper elevation ={0}  sx={{ margin: "1%", background: '#1D2025' }}>
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
          <Select name="condition" value={condition} onChange={handleChange}>
            {Conditions.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>

        <Grid item xs={3.5}>
          <Typography>Criteria</Typography>
          <Select name="criteria" value={criteria} onChange={handleChange}>
            {Criterias.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </Grid>

        <Grid item xs={0.5}>
          {props.index === 0 ? (
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
