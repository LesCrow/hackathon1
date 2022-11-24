import React, { useState } from "react";
import UploadAndDisplayImage from "./components/upload";

import Home from "./Pages/Home";

function App() {
  const [isHomeStep, setIsHomeStep] = useState(true);
  const [isUploadStep, setIsUploadState] = useState(false);
  return (
    <div className="font-fredoka">
      {isHomeStep && <Home />}
      {isUploadStep && <UploadAndDisplayImage />}
    </div>
  );
}

export default App;
