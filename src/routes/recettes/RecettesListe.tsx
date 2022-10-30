import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Image, Spinner } from "react-bootstrap";
import { API_URL } from "../../constants";
import { Recette } from "../../types";
import "./RecettesListe.scss";

const RecettesListe = () => {
  const [recettes, setRecettes] = useState<Recette[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const recettes = await axios.get(API_URL + "recettes", {
        withCredentials: false,
      });

      console.log("recettes", recettes);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <>
      {recettes.map((recette) => (
        <div>
          <Image
            height="100"
            fluid
            src={`${process.env.PUBLIC_URL}/images/quiche.jpg`}
          />
          <div className="image-text">{recette.nom}</div>
        </div>
      ))}
    </>
  );
};

export default RecettesListe;
