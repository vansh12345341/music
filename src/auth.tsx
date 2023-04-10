import React, { useState, useContext, useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import Keycloak from "keycloak-js";

const keycloak = Keycloak({
    url: "",
    realm: "myrealm",
    clientId: "myclient",
    
  });

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);

   


      useEffect(() => {
        const initKeycloak = async () => {
          try {
            await keycloak.init({ onLoad: "check-sso" });
            if (keycloak.authenticated) {
              setAuthenticated(true);
            }
          } catch (error) {
            console.error("Failed to initialize Keycloak", error);
          }
        };
        initKeycloak();
      }, []);
    
      return { authenticated, keycloak };
    
  
}

export default useAuth;