import React from 'react';
import ReactMarkdown from 'react-markdown';

export function ItemImage({ modId, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/block/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '22px', marginRight: '4px', marginBottom: "-5px" }}
      />
    </span>
  );
}

export default function BlockIcon({ modId, imageId }) {
    return (
        <div>
            <span style={{marginBottom: '4px'}}>
                <ItemImage modId={modId} imageUrl={imageId}/>
                <span className="bigAssItemSpacer"></span>
            </span>
        </div>
    );
}