import React, { useState, createContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState("KnowledgeComponent");

  const handleComponentChange = (componentName) => {
    setCurrentComponent(componentName);
  };

  const contextValue = {
    currentComponent,
    handleComponentChange,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
