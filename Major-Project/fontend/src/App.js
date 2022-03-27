import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import Header from "./components/main/header";
import ManageUser from "./components/admin/manageuser";
import ManagePortfolio from "./components/admin/manageportfolio";
import Dashboard from "./components/admin/dashboard";
import ViewPortfolio from "./components/main/viewportfolio";

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
          <Route element={<Header/>} path="header" />
            <Route element={<Footer/>} path="footer" />
            <Route element={<BrowseEquipment />} path="browseEquipment" />
            <Route element={<ViewPortfolio />} path="viewportfolio" />
            
            <Route element={<BrowsePortfolio />} path="browseportfolio" />
          </Route>
          <Route element={<Admin />} path="admin">
            
            <Route element={<AddEquipment />} path="addEquipment" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<ManagePortfolio />} path="manageportfolio" />
            <Route element={<Dashboard />} path="dashboard" />
          </Route>
          <Route exact element={<Navigate to="/main/home" />} path="" />


          <Route element={<User />} path="user">
            <Route element={<CreatePortfolio />} path="createportfolio" />
            <Route element={<Login />} path="login" />
            <Route element={<ManageSetting/>} path="managesetting" />
            <Route element={<Profile/>} path="profile" />
            <Route element={<UpdatePortfolio/>} path="updateportfolio" />
            <Route element={<UserDashboard/>} path="userdashboard" />
            <Route element={<Header/>} path="header" />
            <Route element={<Footer/>} path="footer" />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
