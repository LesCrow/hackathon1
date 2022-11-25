import React, { useState } from "react";

import Main from "./Pages/Main";

import CarouselHome from "./assets/components/CarouselHome";
import Step_3 from "./assets/components/Step_3";

function App() {
  return (
    <div className="font-nunito">
      <Main />
      <CarouselHome />
      <Step_3 />
    </div>
  );
}

export default App;
