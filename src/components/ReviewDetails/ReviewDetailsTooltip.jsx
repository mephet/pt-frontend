import React from 'react';

const ReviewDetailsTooltip = props => {
    <div
        {...props}
        style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
        }}
    >
        Simple tooltip
  </div>
}