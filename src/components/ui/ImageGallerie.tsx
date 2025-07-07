import React from "react";

interface ImageItemMine {
  name: string;
  path: string;
  niveau?: string;
}

type ImageGalleryProps = {
  imagesSrc: ImageItemMine[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ imagesSrc }) => {
  const imagesCount = imagesSrc.length;

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-1 lg:gap-2 mt-2">
      {imagesSrc.slice(0, imagesCount).map((img, index) => (
        <div
          key={index}
          className="w-fit bg-white aspect-square overflow-hidden  transition-transform duration-300 flex flex-col items-center justify-center lg:p-4 p-2"
        >
          <img
            src={img.path}
            alt={`Gallery image ${index + 1}`}
            className="w-6 h-6 lg:w-8 lg:h-8 mb-2"
          />
          <p className="text-center text-sm font-bold">{img.name}</p>
          <p className="text-center text-sm font-light">{img.niveau}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
