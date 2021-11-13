import {Mapper} from './constants/Mapper'; 


export default function QueryBuilder(conjuction, data)
{
    let query = "";
    
    data.forEach((item, index) => {
      var symbol = conjuction ? "&&" : "||";
      
        query +=
          "(field." +
          item.field +
          ")" +
          " " +
          Mapper[item.condition] +
          " " +
          "\\" +
          item.criteria +
          "\\" ;
      


      if(index!==data.length-1)
      {
          query+=" "+symbol + " "; 
      }
      
    });

    
    return query;
  
}