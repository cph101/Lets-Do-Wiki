import React from 'react';
import ReactMarkdown from 'react-markdown';

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
                <span key={index} style={{marginBottom: '4px'}}>
                    <ItemImage modId={modId} imageUrl={item.imageId}/>
                    <span style={{fontWeight: 'bold'}}>{item.name}</span>
                    <span> - </span>
                    <span className="speckyInlineMarkdown"><ReactMarkdown>{item.description}</ReactMarkdown></span>
                    <span className="bigAssItemSpacer"></span>
                </span>
            ))}
        </div>
    );
}
