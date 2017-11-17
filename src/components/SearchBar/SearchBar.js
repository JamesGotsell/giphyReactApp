
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
      console.log(props)
    }

    render() {
        return (
            <div className="seach-bar">
        <form onSubmit={this.props.onSubmit}>
            <label htmlFor="gifs"></label>
            <input 
                type='text' 
                /* ref={input => this.fullName = input} */
                onChange={ e => this.props.onChange(e) }
             /> 
              <input
                type="submit"
                value="search for Gifs"
                
                /> 
          </form>
    
            
          
        </div>
    
        )
    }
 
}
  
  export default SearchBar