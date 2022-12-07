import styled from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from "./Helpers/Design/Models";
import LandingPage from "./Screens/LandingPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Protected from "./Views/Protected";
import ProtectedScreens from "./Views/ProtectedScreens";
import NavBar from "./Views/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route
          path="*"
          element={
            <Protected>
              <NavBar />
              <ProtectedScreens />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const RegisterLink = styled(Container)`
  margin-top: 10px;
`;
