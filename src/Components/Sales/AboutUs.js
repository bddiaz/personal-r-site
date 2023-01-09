import { React, useState, useEffect } from "react";
import styled from "styled-components";
import BirriaTacos from "./assets/birriatacos.jpg";
import ChickenSandwich from "./assets/chickensandwich.jpg";
import Doggies from "./assets/doggies.jpg";
import Fanta from "./assets/fanta.jpg";

function AboutUs(props) {
  const imageData = [
    { image: BirriaTacos, index: 0 },
    { image: ChickenSandwich, index: 1 },
    { image: Doggies, index: 2 },
    { image: Fanta, index: 3 },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  function handleNext() {
    setActiveIndex((prev) => (prev === 3 ? 0 : prev + 1));
  }

  function handlePrev() {
    setActiveIndex((prev) => (prev === 0 ? 3 : prev - 1));
  }

  return (
    <>
      <AboutUsContainer>
        <GalleryContainer>
          <Images>
            {imageData
              .filter((img) => img.index === activeIndex)
              .map((img) => (
                <>
                  <Image src={img.image} />
                </>
              ))}
          </Images>
          <ButtonContainer>
            <ArrowButton onClick={handlePrev}>{"<"}</ArrowButton>
            <ArrowButton onClick={handleNext}>{">"}</ArrowButton>
          </ButtonContainer>
        </GalleryContainer>
        <InfoContainer>
          <Header>Sobre Nosotros</Header>
          <AboutUsBody>
            Historia de las pupusas muestra que dicho alimento goza de
            popularidad y alto consumo entre los salvadoreños; tanto así que
            llego a convertirse en un símbolo nacional. Por lo que, la Asamblea
            Legislativa propone establecer “la pupusa“ como la comida típica del
            país<br></br>
            <br></br>
            Las pupusas son tortillas gruesas de harina de arroz o maíz; las
            cuales son rellenas tradicionalmente de loroco, queso, frijoles
            refritos, chicharrón y ayote. Sin embargo, MUCHOS RELLENOS, por lo
            general se acompañan con salsa de tomate y curtido, una preparación
            a base de vegetales; entre los cuales encontramos zanahorias, chiles
            jalapeños, repollo lacto-fermentado picado muy finamente y otros
            más. ;<br></br> <br></br>
            -https://wikisivar.com/historia-de-las-pupusas/
          </AboutUsBody>
        </InfoContainer>
      </AboutUsContainer>
    </>
  );
}
export default AboutUs;

const ArrowButton = styled.div`
  color: #ab5911;
  width: 40%;
  height: 50%;
  border: none;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1%;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  &:hover {
    background-color: #ae0103;
    color: #f7f5f4;
    a {
      color: #f7f5f4;
    }
    transition: all 0.1s;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 30%;
  height: 5vh;
  // background-color: red;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: 60%;
  margin: auto;
  display: block;
  min-width: 25vh;
`;

const Images = styled.div`
  width: 100%;
  height: fit-content;
  // display: none;
  // background-color: yellow;
`;

const AboutUsBody = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 25px;
  height: 80%;
  width: 100%;
  padding: 1%;
`;
const Header = styled.div`
  font-size: 32px;
  height: 20%
  width: 100%
`;

const AboutUsContainer = styled.div`
  background-color: #f7f5f4;
  height: 65vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow-y: auto;
`;

const GalleryContainer = styled.div`
  width: 30%;
  height: fit-content;
  margin-top: 5vh;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  width: 60%;
  height: 100%;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
