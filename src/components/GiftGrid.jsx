import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs ( category );
    
  return (
    <>
      <h3>{category}</h3>
      {/* {
        isLoading ?  (<h2>loading ...</h2>): null
      } */}
      {
        isLoading && (<h2>loading ...</h2>)
      }
      
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
