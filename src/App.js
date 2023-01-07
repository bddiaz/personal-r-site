import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import { GlobalStyles } from "./Styles/global";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Trips from "./Components/Trips.js";
import Trip from "./Components/Trip.js";
import { useState, useEffect } from "react";
import TripForm from "./Components/TripForm.js";
import Christmas from "./Components/Christmas/Christmas.js";
import Signup from "./Components/Login/Signup.js";
import { AuthProvider } from "./Contexts/AuthContext.js";
import Login from "./Components/Login/Login.js";
import PrivateRoute from "./Components/PrivateRoute.js";
import PupusaHome from "./Components/Sales/PupusaHome.js";

function App() {
  const [trips, setTrips] = useState([{ city: "Chicago " }]);
  const [sale, setSale] = useState(false);

  return (
    <>
      <Container>
        <AuthProvider>
          {sale && <Header />}
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="Signup" element={<Signup />} />
            <Route path="Login" element={<Login />} />
            <Route
              path="Christmas"
              element={
                <PrivateRoute>
                  <Christmas />
                </PrivateRoute>
              }
            />
            <Route path="pupusas/*" element={<PupusaHome />} />
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
              <Route path="newTrip" element={<TripForm />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
