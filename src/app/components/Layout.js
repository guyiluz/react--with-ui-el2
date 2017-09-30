// lib

Search
// components
import React from 'react'
import Nav from './Nav'
import Search from './Search'
import Chart from './Chart'
// other


class Layout extends React.Component {
  constructor(props){
super(props)
    this.state = {
        data: false,
        users:""
      };

  }



getData=(data)=>{
    if(data.length!==0)
    fetch( `https://api.github.com/search/users?q=${data}`)
    .then((res)=>{
        if (!response.ok) {
        throw Error(response.statusText);
        }
        return res.json()
    }).then((data)=>{
        this.setState({
            users:data.items
        })
        console.log(this.state.users)
    }).catch((error)=> {
        console.log(error);
    });


}






    
    render() {
const users =this.state.users
        return (
            <div className="layout">
                {this.state.data}
     <Nav/>
     <Search getData ={this.getData}/>
     <Chart users={users}/>
          </div>  
          
        )
    }
}

export default Layout;

