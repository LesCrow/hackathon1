import React, { useState } from "react";
import ImageContextProvider from "./Context/Imagecontext";
import Index from "./Pages/Index";

function App() {
  return (
    <ImageContextProvider>
      <div className="font-nunito text-darkText">
        <Index />
      </div>
    </ImageContextProvider>
  );
}

export default App;
