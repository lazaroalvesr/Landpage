import React from 'react';
import Image from "next/image";

interface ImageComponentProps {
  img: string;
  alt: string;
  width?: number;
  height?: number;
}

function ImgComponent({ img, alt, width, height }: ImageComponentProps) {
  return (
    <div>
      <div>
        <div>
          <Image
            src={img}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
}

export default ImgComponent;
