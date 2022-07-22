import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import {GlobalStyles} from './Styles/global';
import styled from "styled-components";


function App() {
  return (
    <>
    <Container>
      <Header/>
      <Home/>
    </Container>

    </>
  );
}

export default App;



const Container = styled.div`
  height: 300vh;

`
