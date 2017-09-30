// lib
import React from 'react'
import ReactTable from "react-table";
import JsonTable  from "react-json-table"
// components

 
// other



class Chart extends React.Component {
  




rednerUsers=()=>{
    const uData =this.props.users 
   if(typeof uData!=='object'){
       return false
   }
  
return (
<table>
<tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
      <tbody>{uData.map(function(item, key) {
             
               return (
             
                  <tr key = {key}>
                      <td>{item.login}</td>
                      <td>{item.id}</td>
                      <td>{item.type}</td>
                      <td>{item.score}</td>
                  </tr>
                  
                )
             
             })}</tbody>
       </table>


)
 

 


}


    
    render() {
     
        return (
            <div className="chart">
     {this.rednerUsers()}
          </div>  
          
        )
    }
}

export default Chart;

