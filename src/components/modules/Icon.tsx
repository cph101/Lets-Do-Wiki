import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Image({ modId, type, imageUrl, pixelated }) {
  const imageStyle = {
    imageRendering: pixelated ? 'pixelated' : 'auto',
    width: '50px',
    marginRight: '4px',
    marginBottom: "-5px"
  };

  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/${type}/${imageUrl}`}
        style={imageStyle}
      />
    </span>
  );
}

export default function Icon({ modId, imageId, description, pixelated = true, type }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center' }}>
            <Image modId={modId} type={type} imageUrl={imageId} pixelated={pixelated} />
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
