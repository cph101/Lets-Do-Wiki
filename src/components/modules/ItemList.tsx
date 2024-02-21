import React from 'react';

export function ItemImage({ modId, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/item/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '22px', marginRight: '4px', marginBottom: "-5px" }}
      />
    </span>
  );
}

export default function ItemList({ modId, itemList }) {
  return (
    <div>
      {itemList.map((item, index) => (
        <div key={index} style={{ marginBottom: '4px' }}>
          <ItemImage modId={modId} imageUrl={item.imageId} />
          <strong style={{ textDecorations: 'bold'}}>{item.name}</strong>
          <span> - {item.description}</span>
        </div>
      ))}
    </div>
  );
}
