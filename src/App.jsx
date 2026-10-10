import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";
import UserList from "./Components/UserList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>Mini User Dashboard</h1>
        <nav>
          <Link to={"/"}>Home</Link> | <Link to={"/about"}>About</Link> |{" "}
          <Link to={"/users"}>Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
