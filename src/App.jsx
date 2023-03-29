import Calculator from "./Components/Calc/Calculator";
import ContextProvider from "./Components/Context/Context_Api";

function App() {
  return (
    <>
      <ContextProvider>
      <Calculator />
      </ContextProvider>
    </>
  );
}

export default App;
