import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="teams" element={<Teams/>}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
