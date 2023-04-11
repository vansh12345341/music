import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import "./Api.css"
import { AiOutlineStar , AiFillStar} from "react-icons/ai";
import { isJSDocUnknownTag, isJsxClosingFragment } from 'typescript';
import Sidebar from './components/Sidebar';

export interface ShazamTrack {
  track: any;
  key: string;
  artists: string[];
  title: string;
  query: string;
  image : string;

  tracks : string[] ;
  images:  {coverart: string };
}

const ShazamAPI: React.FC = () => {
  const [tracks, setTracks] = useState<ShazamTrack[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ShazamTrack[]>([]);
  const [isStarClicked, setIsStarClicked] = useState<{[key: string]: boolean}>({});


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/track',
      params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
      headers: {
        'X-RapidAPI-Key': '3c4fd7ebf9msh5dbc5dfa330108ep1ae92cjsnf80b6d0f1cf3',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response: AxiosResponse<{ tracks: ShazamTrack[] }>) => {
        setTracks(response.data.tracks);
      
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  
  const handleApiCall = () => {
    
    if (searchQuery=== '') {
      setSearchResults([]);
      console.log('hey')
    } else {
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
  params: {term: searchQuery, locale: 'en-US', offset: '0', limit: '5'},
  headers: {
    'X-RapidAPI-Key': '3c4fd7ebf9msh5dbc5dfa330108ep1ae92cjsnf80b6d0f1cf3',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  },
      };

      axios
        .request(options)
        .then((response: AxiosResponse<{ tracks:{ hits:  ShazamTrack[]  }}>) => {
          setSearchResults(response.data.tracks.hits);
          console.log(response.data.tracks.hits);
      
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

 

  return (
    <><div  className="search-container">
      <input style={{marginLeft:'15px'}}
        type="text"
        placeholder="Search for a song..."
        value={searchQuery}
        onChange={  handleSearch} />
         <button  className ="button" style={{marginLeft:'10px'}} onClick={ handleApiCall}>Search</button>
       
       </div>
    <div className="track-container">
  {  searchResults.length> 0 ? (
          searchResults.map((track) => (
            <div className="track-card" key={track.track.key}>
              <img src={track.track.images?.coverart} alt={track.title} />
              <h2>{track.track.title}</h2>
              <span className={`star ${isStarClicked ? "clicked" : ""}`} onClick={()=>handleStarClick(track.track.key, track.track.title, track.track.images)}>
              {isStarClicked[track.track.key] ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            </div> 
          )) ) : (
            
              tracks.map((track) => (
                <div className="track-card" key={track.key}>
                  <img src={track.images?.coverart} alt={track.title} />
                  <h2>{track.title}</h2>
                  <span className={`star ${isStarClicked ? "clicked" : ""}`} onClick={()=>handleStarClick(track.key, track.title, track.images.coverart )}>
                  {isStarClicked[track.key] ? <AiFillStar /> : <AiOutlineStar />}
                  </span>
                </div>
              ))
          ) }
          
          </div>
          
      </>
    
        );
};


export default ShazamAPI;
