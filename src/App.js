import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import { GlobalStyles } from "./Styles/global";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Trips from "./Components/Trips.js";
import Trip from "./Components/Trip.js";

function App() {
  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trips">
            <Route index={true} element={<Trips />} />
            <Route
              path="trip1"
              element={<Trip city="Chicago" distance={"100 miles"} />}
            />
            <Route
              path="trip2"
              element={<Trip city="New York" distance={"20 miles"} />}
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
