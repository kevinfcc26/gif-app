import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


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
      <ol>
        {
            images.map(({id,title}) => (
                <li key={id}>{title}</li>
            ))
        }
      </ol>
    </>
  );
};
