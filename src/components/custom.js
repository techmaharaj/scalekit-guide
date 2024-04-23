import React from 'react';

export default function Subtitle({children}) {
  return (
    <p
  style = {
    {
      marginTop: '-15px', fontStyle: 'italic'
    }
  } > {children} < /p>
  );
}