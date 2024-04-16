import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Image({ modId, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/effect/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '50px', marginRight: '4px', marginBottom: "-5px"}}
      />
    </span>
  );
}

export default function EffectList({ modId, list }) {
  return (
    <div>
      {list.map((item, index) => (
        <span key={index} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', alignItems: 'center' }}>
          <Image modId={modId} imageUrl={item.imageId} />
          <span style={{fontWeight: 'bold'}}>{item.name}</span>
          <span> - </span>
          <span className="speckyInlineMarkdown" style={{ marginLeft: '8px' }}>
            <ReactMarkdown>{item.description}</ReactMarkdown>
          </span>
        </span>
      ))}
    </div>
  );
}