import React from 'react';

export function SimpleCode({ children }) {
    return (<code className = 'simple_code'>{children}<
          /code>
  );
}

export default function Subtitle({children}) {
  return (
    <p
      style={{
        marginTop: '-1.5rem',
        marginBottom: '1.5rem'
      }}>
      {children}
    </p>);
}