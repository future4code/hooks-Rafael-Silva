import axios from "axios";
import React, { useState, useEffect } from "react";

export const Conhecer = () => {
  const [showConhecer, setShowConhecer] = useState([]);

  const getConhecer = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-silva-hooks/matches"
      )
      .then((res) => {
        console.log(res);
        setShowConhecer(res.data.Conhecer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getConhecer();
  }, []);

  return (
    <div>
      {showConhecer.map((match) => {
        return (
          <div>
            <p>{match.name}</p>
            <img src={match.photo} alt="" />
          </div>
        );
      })}
    </div>
  );
};
