import React from 'react';

const DirectionMap = ({ directions }) => {
  return (
    <div className="direction-map">
      <h2>Directions</h2>
      <p>{directions}</p>
    </div>
  );
};

export default DirectionMap;
