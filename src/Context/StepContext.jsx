import { useState } from "react";
import { createContext, useContext } from "react";

const StepContext = createContext({});

const StepContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
export const useStepContext = () => {
  const context = useContext(StepContext);
  return context;
};

export default StepContextProvider;
