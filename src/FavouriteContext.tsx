import React, { Children, useState } from 'react';

interface IFavouriteContext {
  showFavourites: boolean;
  setShowFavourites: (show: boolean) => void;
}

export const FavouriteContext = React.createContext<IFavouriteContext>({
  showFavourites: false,
  setShowFavourites: () => {}
});

export const FavouriteContextProvider: React.FC = () => {
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <FavouriteContext.Provider value={{ showFavourites, setShowFavourites }}>
      {}
    </FavouriteContext.Provider>
  );
};
