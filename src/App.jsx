import { useState } from "react";
import { UserContext } from "./components/context/user";
import SmoothScroll from "./components/ui/SmoothScroll";
import LandingPage from "./pages/landingPage";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <UserContext.Provider value={{ menu, setMenu }}>
      <SmoothScroll>
        <LandingPage />
      </SmoothScroll>
    </UserContext.Provider>
  );
}

export default App;
