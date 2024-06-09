import React from 'react';
import Link from '@docusaurus/Link';

function BackToHomeButton() {
  return (
    <Link
      to="/"
      className="button button--outline button--sm margin-bottom--md"
    >
      Back to Home
    </Link>
  );
}

export default BackToHomeButton;
