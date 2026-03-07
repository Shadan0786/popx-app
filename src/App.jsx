import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";

import MobileContainer from "./components/MobileContainer";

function App() {

  return (
    

      <MobileContainer>

        <Routes>

          <Route path="/" element={<Welcome />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/account" element={<Account />} />

        </Routes>

      </MobileContainer>

   
  );

}

export default App;