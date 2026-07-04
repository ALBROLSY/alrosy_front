import React, { useState } from 'react';

function Gallery() {
    const [mainImage, setMainImage] = useState('src/assets/images.jpeg');
    const images = [
        { id: 1, src: 'src/assets/istockphoto-479009182-1024x1024.jpg' },
        { id: 2, src: 'src/assets/phone-solid-full.svg' },
        { id: 3, src: 'src/assets/square-whatsapp-brands-solid-full.svg' },
        { id: 4, src: 'src/assets/square-whatsapp-brands-solid-full.svg' },
        { id: 5, src: 'src/assets/tiktok-brands-solid-full.svg' },
    ];

    const handleImageClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    return (
        <div className="gallery">
            <div className="main-image">
                <img src={mainImage} alt="Main Image" />
            </div>
            <div className="thumbnails">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt="Thumbnail"
                        onClick={() => handleImageClick(image.src)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
