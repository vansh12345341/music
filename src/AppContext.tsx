import React, { createContext, useState , ReactNode} from 'react';

// Create initial context values
export const initialContext = {
  showFavourite: false,
  handleFavouriteClick: () => {},
  handleDiscoverClick: () => {}
};

// Create AppContext
export const AppContext = createContext(initialContext);

// Create AppProvider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showFavourite, setShowFavourite] = useState(false);

  const handleFavouriteClick = () => {
    setShowFavourite(true);
  };

  const handleDiscoverClick = () => {
    setShowFavourite(false);
  };

  const contextValues = {
    showFavourite,
    handleFavouriteClick,
    handleDiscoverClick
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};
