import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Protected.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setprofile } from "../Redux/userslice/userslice";
import { GetCurrentUsers } from "../Pages/Apicalls/user";
import Userlogo from "../assets/userlogo.png"
import Logout from "../assets/ogout.png"

const ProtectedRouter = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.users);
  // console.log(profile,"SADasjbdhajw");

  const getprecentuser = async () => {
    try {
      const response = await GetCurrentUsers();
      if (response) {
        dispatch(setprofile(response.data));
        // console.log("hjdhasd", response.data);
      } else {
        dispatch(setprofile(null));
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (e) {
      console.log(e, "error");
    }
  };

  const handleclick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getprecentuser();
    }
  }, []);

  return (
    <div>
      <Navbar bg="black" expand="lg">
        <Container style={{ marginLeft: "30px" }}>
          <Navbar.Brand
            style={{
              color: "deepskyblue",
              fontFamily: "cursive",
              marginLeft: "10px",
            }}
          >
           Lets do it
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse
            id="navbarResponsive"
            className="flex-grow-1"
            style={{ color: "white", borderColor: "white" }}
          >
            <Form className="d-flex">
              <FormControl
                type="search"
                className="placeholdercolor"
                placeholder="Search"
                aria-label="Search"
                style={{
                  marginLeft: "25px",
                  paddingRight: "320px",
                  backgroundColor: "black",
                  color: "white",
                }}
              />
            </Form>
            <a href="#" className="home-e" style={{ color: "deepskyblue" }}>
              Home
            </a>
            <NavDropdown
              title="Select"
              id="basic-nav-dropdown"
              className="select"
              style={{ marginLeft: "100px", color: "deepskyblue" }}
            >
              <NavDropdown.Item href="#">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#">Delhi </NavDropdown.Item>
              <NavDropdown.Item href="#">Bangalore </NavDropdown.Item>
              <NavDropdown.Item href="#">Hyderabad </NavDropdown.Item>
              <NavDropdown.Item href="#">Ahmedabad </NavDropdown.Item>
              <NavDropdown.Item href="#">Chennai </NavDropdown.Item>
              <NavDropdown.Item href="#"> Kolkata</NavDropdown.Item>
              <NavDropdown.Item href="#">Surat </NavDropdown.Item>
              <NavDropdown.Item href="#"> Pune</NavDropdown.Item>
              <NavDropdown.Item href="#">Jaipur </NavDropdown.Item>
              <NavDropdown.Item href="#"> Lucknow</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Others</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
        <Nav style={{ marginRight: "65px" }}>
          <img src={Userlogo} className="user-img"></img>

          <a
            className="ml-2"
            onClick={() => {
              if (profile?.isAdmin) {
                navigate("/admin");
              } else {
                navigate("/user");
              }
            }}
          >
            {profile?.username}
          </a>
        </Nav>
        <Nav style={{ marginRight: "45px" }}>
          <button className="ml-3" onClick={handleclick}>
            <img className="Logout" src={Logout}></img>
          </button>
        </Nav>
      </Navbar>
      <div>{children}</div>
    </div>
  );
};

export default ProtectedRouter;
