import React from 'react'
import Image from "next/image";

interface ImageComponent {
  img: string
  alt: string
}

function ImgComponent({ img, alt }: ImageComponent) {
  return (
    <div>
      <div>
        <div>
          <Image
            src={img}
            alt={alt}
            width={170}
            height={90}
          />
        </div>
      </div>
    </div>
  )
}

export default ImgComponent