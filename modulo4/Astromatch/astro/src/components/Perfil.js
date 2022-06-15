import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 300px;
    border: 1px solid black;
  }
`;

export const Perfil = () => {
  const [showPerfil, setShowPerfil] = useState({});

  const getPerfilToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-silva-hooks/person"
      )
      .then((res) => {
       
        setShowPerfil(res.data.Perfil);
      })
      .catch((err) => {
        
      });
  };

  useEffect(() => {
    getPerfilToChoose();
  }, []);

  const chosenPerfil = (choice) => {
    const body = {
      id: showPerfil.id,
      choice: choice
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-silva-hooks/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
      });
  };

  const onClickYes = () => {
    chosenPerfil(true);
    console.log("yes");
  };

  const onClickNo = () => {
    chosenPerfil(false);
    console.log("no");
  };

  return (
    <Container>
      <h1>Astromatch</h1>
      <h3>{showPerfil.name}</h3>
      <img src={showPerfil.photo} alt={showPerfil.photo_alt} />
      <button onClick={onClickYes}>YES</button>
      <button onClick={onClickNo}>NO</button>
    </Container>
  );
};
