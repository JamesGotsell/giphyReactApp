 /* eslint-disable-line no-lone-blocks */
import React from 'react'
import GiphyListItem from './GiphyListItem';

const  GiphyList = ({giphyResults=[]}) => {
  
        { 
        return  giphyResults.map( ( giphyResult, i ) => {
            if (giphyResults.length > 0) {
            return (
                 <GiphyListItem 
                    key={i} 
                    type={giphyResult.type}
                    url={giphyResult.embed_url}
                    
                    slug={giphyResult.slug}
                    title={giphyResult.title}
                    />
                 
            )
         } else {
               return null;
        }
      })
    } 

}

export default GiphyList