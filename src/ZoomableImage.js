import React, { useState } from 'react';
import './Style/ZoomableImage.css'; // Import your CSS file for styling

const ZoomableImage = ({ src, alt }) => {
    const [zoomed, setZoomed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const toggleZoom = () => setZoomed(!zoomed);

    const handleMouseMove = (e) => {
        if (zoomed) {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setPosition({ x, y });
        }
    };

    const handleMouseLeave = () => {
        if (zoomed) {
            setZoomed(false);
            setPosition({ x: 0, y: 0 });
        }
    };

    const imageStyle = {
        transform: zoomed ? `scale(2) translate(-${position.x}%, -${position.y}%)` : 'scale(1)',
    };

    return (
        <div
            className={`zoom-container ${zoomed ? 'zoomed-in' : ''}`}
            onClick={toggleZoom}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img src={src} alt={alt} style={imageStyle} />
        </div>
    );
};

export default ZoomableImage;
