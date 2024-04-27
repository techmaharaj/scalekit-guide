import React from 'react';

export function SimpleCode({children}) {
  return (<code className = 'simple_code'>{children}<
          /code>
  );
}

export default function Subtitle({children}) {
  return (
    <p
      style={{
        marginTop: '-15px',
        fontStyle: 'italic'
      }}>
      {children}
    </p>);
}
