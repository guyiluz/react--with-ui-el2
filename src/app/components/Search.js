// lib
import { Button,Input } from 'semantic-ui-react'
import React from 'react'
// components

 
// other


class Search extends React.Component {
  
heandleClick(e) {
e.preventDefault()  
  const searchVal =this.refs.search.value
  this.props.getData(searchVal)
  debugger
}








    
    render() {
console.log(this.props)
        return (
            <div className="search">
  
   <form>
          <Input type="search" placeholder="Search" ref="search" />
          <Button type="button" onClick={this.heandleClick.bind(this)}>Search</Button>
        </form>


   
  


          </div>  
          
        )
    }
}

export default Search;

