import React from 'react'

export const Card = ({img,titulo,link}) => {
  return (
    <a class="card" href={link} target="_blank">
        <img src={img} alt="Imagen"/>
        <div class="container">
            <h4><p>{titulo}</p></h4>
        </div>
    </a>
  )
}
