import React from 'react';
import 'boxicons';

const Card = ({quoteRandom, colorRandom, clickButton}) => {

  const styleButton = {
    backgroundColor: colorRandom
  }
  
  const styleText = {
    color: colorRandom
  } 

  return (
    <article>
        <h2 style={styleText}>{quoteRandom.quote}</h2>
        <p style={styleText}>{quoteRandom.author}</p>

        <button style={styleButton} className='btnRefresh' onClick={clickButton}>
          <box-icon name='refresh' animation='spin'></box-icon>
        </button>     
    </article>
  )
}
export default Card