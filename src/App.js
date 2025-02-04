import React from "react";
import Router from "./routes/Router";
import SebedimContextProvider from "./context/Context";


function App() {
  return (
    <SebedimContextProvider>
      <Router />
    </SebedimContextProvider>
  );
}

export default App;
