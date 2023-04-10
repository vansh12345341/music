import React, { useState , useContext} from 'react';
import Fvaourite from '../Condition/Fvaourite';
import { AppContext } from '../AppContext';


export type SidebarProps = {
  showFavourites: boolean;
  setShowFavourites: (show: boolean) => void;
  handleFavouriteClick: () => void;
  handleDiscoverClick: () => void;
}


const Sidebar: React.FC<SidebarProps> = () =>{
  const { handleFavouriteClick, handleDiscoverClick } = useContext(AppContext);

  const [activeItem, setActiveItem] = useState('Home');
  const [searchActive, setSearchActive] = useState(false);
  const [toggle , setToggle] = useState(false);

  const handleClick = (item: string) => {
    setActiveItem(item);
    if (item === 'Favourites') {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
    if (item === 'Home' || item === 'Search' || item === 'Playlists') {
      setSearchActive(false); }
  };

  return (
    <div  style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '220px',
    }} >
      <div
        className={`sidebar__item ${activeItem === 'Home' ? 'sidebar__item--active' : ''}`}
        onClick={() => { handleClick('Home'); handleDiscoverClick();}}   
      >
       <button className="btn"> Home</button> 
      </div>
      <div
        className={`sidebar__item ${activeItem === 'Search' ? 'sidebar__item--active' : ''}`}
        onClick={() => handleClick('Search')}
      >
       <button className="btn">Search</button> 
      </div>
      <div
        className={`sidebar__item ${activeItem === 'Favourites' ? 'sidebar__item--active' : ''}`}
        onClick={() => {handleClick('Favourites') ; handleFavouriteClick(); }}
      >
        <button   onClick={handleFavouriteClick} className="btn" > Favourites
        
        </button>
      </div>
      <div
        className={`sidebar__item ${activeItem === 'Playlists' ? 'sidebar__item--active' : ''}`}
        onClick={() => handleClick('Playlists')}
      >
       <button className="btn" >Playlists</button> 
      </div>
      
    </div>
  );
};

export default Sidebar;
