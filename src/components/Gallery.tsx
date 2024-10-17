import Img1 from "../Assets/IMG 4070 copy 3.webp";
import Img2 from "../Assets/IMG 4097 2.webp";
import Img3 from "../Assets/IMG 4218 copy 3.webp";
import Img4 from "../Assets/IMG 4822 copy 4.webp";
import Img5 from "../Assets/IMG 4841 2.webp";
import Img6 from "../Assets/IMG 4842 2.webp";
import Img7 from "../Assets/IMG 4843 2.webp";
import Img8 from "../Assets/IMG 4851 2.webp";
import Img9 from "../Assets/IMG 4923 2.webp";
import Img10 from "../Assets/IMG 5093 2.webp";
import Img11 from "../Assets/IMG 5250 3.webp";
import Img12 from "../Assets/IMG 5416 3.webp";
import Img13 from "../Assets/IMG 5418 3.webp";
import Img14 from "../Assets/IMG 5419 3.webp";
import Img15 from "../Assets/IMG 5567 copy 3.webp";
import Img16 from "../Assets/IMG 5982 2.webp";
import Img17 from "../Assets/IMG 5985 2.webp";
import Img18 from "../Assets/IMG 5986 2.webp";
import Img19 from "../Assets/IMG 5996 2.webp";
import Img20 from "../Assets/IMG 6075 2.webp";
import Img21 from "../Assets/IMG 6182 copy 3.webp";
import Img22 from "../Assets/IMG 6186 copy 4.webp";
import Img23 from "../Assets/IMG 6258 copy 3.webp";
import Img24 from "../Assets/IMG 6911 2.webp";
import Img26 from "../Assets/IMG 7218.webp";
import Img27 from "../Assets/IMG 7236 2.webp";
import Img28 from "../Assets/IMG 7239 2.webp";
import Img29 from "../Assets/IMG 7244 2.webp";
import Img30 from "../Assets/IMG 7252.webp";
import Img31 from "../Assets/IMG 7253.webp";
import Img32 from "../Assets/IMG_6183 copy 3.webp";
import Img33 from "../Assets/IMG_6193 copy 3.webp";
import Img34 from "../Assets/IMG_7135 3.webp";




import React, { useState, useEffect } from 'react';

interface ImgProps {
    src: string;
    alt: string;
    index: number;
}

const OptimizedImage = ({ src, alt, index }:ImgProps) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
    img.src = src;
  }, [src]);

  return (
    <img loading="lazy"
      src={src}
      alt={alt}
      key={index}
      width={dimensions.width}
      height={dimensions.height}
      className="w-full mb-1 md:mb-2 lg:mb-5 rounded-sm  cursor-pointer"
      style={{
        aspectRatio: `${dimensions.width} / ${dimensions.height}`,
        objectFit: 'cover',
      }}
    />
  );
};


export const Gallery = () => {
    const images = [
      Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10,
      Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20,
      Img21, Img22, Img23, Img24, Img26, Img27, Img28, Img29, Img30, Img31,
      Img32, Img33, Img34
    ];
  
    return (
      <div className="bg-black pt-[80px] md:px-7">
        <h2 className="ivy text-6xl text-white text-center w-full mb-11 font-thin">
          Gallery
        </h2>
        <div className="Imgcontainer">
          {images.map((img, index) => (
            <OptimizedImage
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  key={index} index={0}            />
          ))}
        </div>

        <p className="text-white text-base w-full text-center inter opacity-40 my-6"> Shot on Iphone</p>
      </div>
    );
  };