import React, {Component} from 'react'


class GiphyListItem  extends Component {

  constructor(props) {
    super(props)
        console.log(this.props)
    }
   

  render(){
      const { url , title , type } = this.props
    return (
           <div className="gifhy-item">
                <div><img src={url} /></div>
                <div><iframe src={url} className="giphy-embed" allowFullScreen></iframe></div>
                <p>{title} - {type} </p>
           </div>
    )
  }
    
    
}

export default GiphyListItem