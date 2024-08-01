import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export function GalleryImages({ src, hash }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  });

  return (
    <>
      <div className={imageLoaded ? "hidden" : "inline"}>
        <Blurhash
          hash={hash}
          width={400}
          height={600}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="relative z-10"
        />
      </div>
      <img
        src={src}
        className={imageLoaded ? "inline relative z-10" : "hidden"}
        loading="lazy"
      />
    </>
  );
};

