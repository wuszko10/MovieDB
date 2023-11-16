import React from 'react';
import './style.css'

const Grid = ({ columns, children }) => {
    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {children.map((child, index) => (
                <div key={index} className="grid-item">
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Grid;
