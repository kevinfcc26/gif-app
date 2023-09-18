import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GiftItem } from "./GiftItem";


export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        getImages();
    //   getGifs(category).then((newImages) => setImages(newImages));

    }, [])

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
            images.map(( image ) => (
                <GiftItem 
                    key={image.id}
                    {...image}
                />
                
            ))
        }
      </div>
    </>
  );
};
