import Reac, {useState , useContext} from "react";
import "./App.css";
import Discover from './components/Discover';
import { Routes , Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar , { SidebarProps } from "./components/Sidebar";
import Fvaourite from "./Condition/Fvaourite";
import { AppContext, initialContext , AppProvider} from './AppContext';
import  useAuth from './auth';


const App: React.FC<SidebarProps> = (props: any) => {
  const { authenticated } = useAuth();
  
  const { showFavourite, handleFavouriteClick, handleDiscoverClick } = useContext(AppContext);
  


  const [showFavourites, setShowFavourites] = useState(false);

  const handleFavouritesClick = () => {
    setShowFavourites(true);
  };

  const sidebarProps: SidebarProps = {
    showFavourites: showFavourites,
    setShowFavourites: setShowFavourites,
    handleFavouriteClick: function (): void {
      throw new Error("Function not implemented.");
    },
    handleDiscoverClick: function (): void {
      throw new Error("Function not implemented.");
    }
  };
  return  (
    <div style={{ display: "flex" }}>
      <div className="sidebar-container">
        <Sidebar {...sidebarProps} />
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Header />
        {showFavourite ? <Fvaourite /> : <Discover />}
      </div>
    </div>
  ) ;
};

export default App;
