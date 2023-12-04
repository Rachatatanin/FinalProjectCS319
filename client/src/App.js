import React from "react";
import { AppContextProvider } from "./AppContext";
import KnowledgeComponent from "./KnowledgeComponent";
import Cafe from "./cafe";
import Adopt from "./adopt";

const App = () => {
  return (
    <AppContextProvider>
      <div className="App">
        <KnowledgeComponent />
        <Cafe />
        <Adopt />
      </div>
    </AppContextProvider>
  );
};

export default App;
