import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './FavouriteContext';


import { AppProvider } from './AppContext'; // Update import to use AppProvider


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <AppProvider> {/* Wrap your App component with AppProvider */}
    <BrowserRouter>
      <App showFavourites={false} setShowFavourites={function (show: boolean): void {
          throw new Error('Function not implemented.');
        } } handleFavouriteClick={function (): void {
          throw new Error('Function not implemented.');
        } } handleDiscoverClick={function (): void {
          throw new Error('Function not implemented.');
        } } /> {/* Remove props from here, and access them through AppContext */}
    </BrowserRouter>
  </AppProvider>
</React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

