import React from 'react';

export function SimpleCode({children}) {
  return (
      <code className = 'simple_code'>{children}<
          /code>
  );
}

export function CardTileWithImage({url, imageSrc, title, description}){
  return (
  <article className='col col--4 margin-bottom--lg'>
    <a className='card padding--lg cardContainer' 
    href={url}>
    <h3>
      <img alt={title} src={imageSrc}></img>
      <p>{title}</p></h3><p>{description}</p></a>
      </article>
    )
}

export default function Subtitle({children}) {
  return (
    <p className='subtitle'> {children} </p>);
}
