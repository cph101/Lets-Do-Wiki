import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Image({ modId, type, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/${type}/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '50px', marginRight: '4px', marginBottom: "-5px" }}
      />
    </span>
  );
}

export default function List({ modId, list, type }) {
    return (
        <div>
            {list.map((item, index) => (
                <span key={index} style={{marginBottom: '4px'}}>
                    <Image modId={modId} type={type} imageUrl={item.imageId}/>
                    <span style={{fontWeight: 'bold'}}>{item.name}</span>
                    <span> - </span>
                    <span className="speckyInlineMarkdown"><ReactMarkdown>{item.description}</ReactMarkdown></span>
                    <span className="bigAssItemSpacer"></span>
                </span>
            ))}
        </div>
    );
}

export function ItemList(props) {
    return <List {...props} type="item" />;
}

export function BlockList(props) {
    return <List {...props} type="block" />;
}

export function EffectList(props) {
    return <List {...props} type="effect" />;
}