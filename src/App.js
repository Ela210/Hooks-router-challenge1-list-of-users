import "./App.css";
import Search from "./Components/Search";
import Error from "./Components/Error";
import Home from "./Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import Description from "./Components/Description";
// import Add from "Components/Add";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
            <Link to={"/Users"}>
              <Button>Users</Button>
            </Link>
            {/* <Link to={"/Add"}>
              <Button>Add</Button>
            </Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Search />} />
        <Route path="*" element={<Error />} />
        <Route path="/Users/Description/:id" element={<Description />} />
        {/* <Route path="/Add" element={<Add />} /> */}
      </Routes>
      <h1 style={{ color: "brown" }}></h1>
    </div>
  );
}

export default App;
