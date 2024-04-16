import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Image({ modId, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/${type}/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '50px', marginRight: '4px', marginBottom: "-25px"}}
      />
    </span>
  );
}

export default function EffectList({ modId, list}) {
    return (
        <div>
            {list.map((item, index) => (
                <span key={index} style={{marginBottom: '4px'}}>
                    <Image modId={modId} imageUrl={item.imageId}/>
                    <span style={{fontWeight: 'bold'}}>{item.name}</span>
                    <span> - </span>
                    <span className="speckyInlineMarkdown"><ReactMarkdown>{item.description}</ReactMarkdown></span>
                    <span className="bigAssItemSpacer"></span>
                </span>
            ))}
        </div>
    );
}