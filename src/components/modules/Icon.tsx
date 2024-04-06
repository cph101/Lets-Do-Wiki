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

export default function Icon({ modId, imageId, description, type }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center' }}>
            <Image modId={modId} type={type} imageUrl={imageId} />
            <span className="speckyInlineMarkdown" style={{ marginLeft: '8px' }}>
                <ReactMarkdown>{description}</ReactMarkdown>
            </span>
            <span className="bigAssItemSpacer"></span>
        </div>
    );
}

export function ItemIcon(props) {
    return <Icon {...props} type="item" />;
}

export function BlockIcon(props) {
    return <Icon {...props} type="block" />;
}