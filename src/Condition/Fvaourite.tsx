import React , {useState } from 'react';
import { AiOutlineStar , AiFillStar} from "react-icons/ai";

const Favorite: React.FC = () => {
  const favorites = localStorage.getItem('favorites') || '{}';
  const favoritesObj = JSON.parse(favorites);
  const [isStarClicked, setIsStarClicked] = useState<{[key: string]: boolean}>({});

  console.log(favoritesObj);

  const handleStarClick = (trackKey: string,title: string, image: string) => {
    setIsStarClicked(prevState => ({
      ...prevState,
      [trackKey]: !prevState[trackKey]
    }));
    const favorites = localStorage.getItem('favorites') || '{}';
    const favoritesObj = JSON.parse(favorites);
    favoritesObj[trackKey] = !isStarClicked[trackKey];
    
    // Store track title and image in local storage
    if (favoritesObj[trackKey]) {
      favoritesObj[trackKey] = { title, image };
    } else {
      delete favoritesObj[trackKey];
    }
  
    localStorage.setItem('favorites', JSON.stringify(favoritesObj));
  };

  return (
    <div  className="main" >
      <h1>Favorite Tracks</h1>
      
      {Object.entries(favoritesObj).map(([trackKey, isFavorite]) => {
        // Render only if the track is marked as favorite
     
        return(
          <div className="track-card" key={trackKey}>
          <img src={(isFavorite as any).image?.coverart}  />
          <h2>{(isFavorite as any).title}</h2>
          <span className={`star ${isStarClicked ? "clicked" : ""}`} onClick={()=>handleStarClick(trackKey, (isFavorite as any).title, (isFavorite as any).images)}>
          {isStarClicked[trackKey] ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        </div> 
        )
      })}
     
    </div>
  );
};

export default Favorite;




