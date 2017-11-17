import React, {Component} from 'react'

import GiphyList from './GiphyList'
class GiphyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      giphyResults: []
    }
    console.log(this.props.searchItem)
    //this.getResults = this.getResults.bind(this);
     this.callToService = this.callToService.bind(this);
    }
   
   
    componentWillMount() {
        fetch(` https://api.giphy.com/v1/gifs/search?api_key=`+process.env.REACT_APP_GIPHY+`&q=`+this.props.searchItem+`&limit=10&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(data => {
            console.log('parsed data ', data)
            this.setState({giphyResults: data})
        }).catch((err)=> {
            console.log(err)
        })
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.searchItem !== nextProps.searchItem) {
          this.callToService(nextProps.searchItem)
        }
      }
    callToService(search) {
        fetch(` https://api.giphy.com/v1/gifs/search?api_key=`+process.env.REACT_APP_GIPHY+`&q=`+this.props.searchItem+`&limit=10&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(data => {
            console.log('parsed data ', data)
            this.setState({giphyResults: data})
        }).catch((err)=> {
            console.log(err)
        })

    }  

  render(){
    return (
        <div className="giphy-container">
             <GiphyList giphyResults={this.state.giphyResults.data}/>     
        </div>
           
    )
  }
    
    
}

export default GiphyContainer