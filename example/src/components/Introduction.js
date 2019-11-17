import React from 'react';

const Introduction = () => {
  return (
    <div className="introduction">
      <blockquote>
        <p>Easy to use and customisable breadcrumb component for your react applications.</p>
      </blockquote>

      <p>For the breadcrumb component to stay small and customisable, I had to make some decisions.</p>
      <ol>
        <li>The last item is always the active page</li>
        <li>Collapse to dropdown menu after 3 items</li>
        <li>Make the component seem <i>dump</i> by having the dev pass the links (there are components that auto generate from a routing package, this isn't on of those)</li>
      </ol>
    </div>
  );
};

export default Introduction;
