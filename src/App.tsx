import MainPage from "./MainPage";
import { WeekProvider } from "./featuers/context/weekContext";

function App() {
  return (
    <>
      <WeekProvider>
        <MainPage />
      </WeekProvider>
    </>
  );
}

export default App;
