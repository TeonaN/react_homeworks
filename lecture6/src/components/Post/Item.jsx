
import React from 'react';

function Item({ item, handleItemClick }) {
  return (
    <div
      className="row flex-column border border-info mb-3"
      onClick={handleItemClick}
    >
      <h2>{item.title}</h2>
    </div>
  );
}

export default Item;