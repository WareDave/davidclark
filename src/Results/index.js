import React from 'react';

function Results (props) {
    return(
        props.data.map(giph => {
           return <img className="result" src={giph.images.downsized_large.url} alt={giph.title}/>
        })
    )
}

export default Results;