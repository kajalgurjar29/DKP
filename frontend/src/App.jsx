import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Forgot from "./components/Forgot/Forgot";
import Dashboard from "./components/Dashboard/Dashboard";
import Pools from "./components/DkpPools/Pools";
import View from "./components/DkpPools/View";
import Edit from "./components/DkpPools/Edit";
import Role from "./components/Roles/Role";
import EditPool from "./components/Roles/EditPool";
import Event from "./components/Event/Event";
import Eventview from "./components/Event/Eventview";
import EventEdit from "./components/Event/EventEdit";
import Auctions from "./components/Auctions/Auctions";
import Auctionsview from "./components/Auctions/Auctionsview";
import AuctionsEdit from "./components/Auctions/AuctionsEdit";
import Users from "./components/Users/Users";
import AddUsers from "./components/Users/AddUsers";
import EditUsers from "./components/Users/EditUsers";
import Help from "./components/Help/Help";
import Messages from "./components/Help/Messages";
import Rules from "./components/Rules/Rules";
import RulesAdd from "./components/Rules/RulesAdd";
import RulesEdit from "./components/Rules/RulesEdit";
import Active from "./components/Active/Active";
import Player from "./components/Active/Player";
import AllPlayer from "./components/Active/AllPlayer";
import EventDashboard from "./components/Event Managers/Dashboard/EventDashboard";
import Profile from "./components/ProfileManagement/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pools" element={<Pools />} />
          <Route path="/view" element={<View />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/EditPool" element={<EditPool />} />
          <Route path="/events" element={<Event />} />
          <Route path="/eventsview" element={<Eventview />} />
          <Route path="/eventEdit" element={<EventEdit />} />
          <Route path="/Auctions" element={<Auctions />} />
          <Route path="/Auctionsview" element={<Auctionsview />} />
          <Route path="/AuctionsEdit" element={<AuctionsEdit />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/AddUsers" element={<AddUsers />} />
          <Route path="/EditUsers" element={<EditUsers />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/RulesAdd" element={<RulesAdd />} />
          <Route path="/RulesEdit" element={<RulesEdit />} />
          <Route path="/Active" element={<Active />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/AllPlayer" element={<AllPlayer />} />
          <Route path="/EventDashboard" element={<EventDashboard />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
