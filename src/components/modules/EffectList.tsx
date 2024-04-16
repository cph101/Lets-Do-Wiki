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
        <div key={index} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center' }}>
          <Image modId={modId} imageUrl={item.imageId} />
          <div className="speckyInlineMarkdown" style={{ marginLeft: '8px' }}>
            <strong>{item.name}</strong> - <ReactMarkdown>{item.description}</ReactMarkdown>
            <span className="bigAssItemSpacer"></span>
          </div>
        </div>
      ))}
    </div>
  );
}