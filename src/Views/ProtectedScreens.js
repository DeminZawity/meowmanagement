import { Route, Routes } from "react-router-dom";
import MyCat from "../Screens/MyCats";
import AddCat from "../Screens/AddCat";
import CatDetails from "../Screens/CatDetails";
import EditVet from "../Screens/EditVet";
import VetVisits from "../Screens/VetVisits";
import AddVetVisit from "../Screens/AddVetVisit";
import EditVetVisit from "../Screens/EditVetVisit";
import ShotsCompleted from "../Screens/ShotsCompleted";
import EditShot from "../Screens/EditShot";
import AddShot from "../Screens/AddShot";
import AddVet from "../Screens/AddVet";
import EditCat from "../Screens/EditCat";

function ProtectedScreens() {
  return (
    <Routes>
      <Route path="/MyCats" element={<MyCat />} />
      <Route path="/AddACat" element={<AddCat />} />
      <Route path="/CatDetails/:ID/:vetID" element={<CatDetails />} />
      <Route path="/EditVet/:vetID" element={<EditVet />} />
      <Route path="/VetVisits/:CatID" element={<VetVisits />} />
      <Route path="/AddVetVisit/:CatID" element={<AddVetVisit />} />
      <Route path="/EditVetVisit" element={<EditVetVisit />} />
      <Route path="/ShotsCompleted/:CatID" element={<ShotsCompleted />} />
      <Route path="/EditShot" element={<EditShot />} />
      <Route path="/AddAShot/:CatID" element={<AddShot />} />
      <Route path="/AddVet/:CatID" element={<AddVet />} />
      <Route path="/EditCat/:CatID" element={<EditCat />} />
    </Routes>
  );
}

export default ProtectedScreens;
