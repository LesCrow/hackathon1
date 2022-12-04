import React from "react";
import ImageContextProvider from "./Context/Imagecontext";
import StepContextProvider from "./Context/StepContext";
import Index from "./Pages/Index";

function App() {
  return (
    <StepContextProvider>
      <ImageContextProvider>
        <div className="font-nunito text-darkText">
          <Index />
        </div>
      </ImageContextProvider>
    </StepContextProvider>
  );
}

export default App;
