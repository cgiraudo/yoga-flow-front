import axios from "axios";
import React, { useEffect, useState } from "react";
import { Figure } from "../../types/Figure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const List = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Figure[]>([]);

  useEffect(() => {
    const test = [
      {
        ID: 1,
        nom_fr: "nom fr",
        nom_sk: "nom sk",
        image:
          "https://lesbienetre.com/wp-content/uploads/2019/07/chien-t%C3%AAte-en-bas-yoga.jpg",
        description: "descr",
        groupe_musc_1_ID: 1,
        groupe_musc_2_ID: 2,
        objectif_ID: 3,
        energetique: "energetik",
      },
      {
        ID: 2,
        nom_fr: "nom fr",
        nom_sk: "nom sk",
        image:
          "https://lesbienetre.com/wp-content/uploads/2019/07/chien-t%C3%AAte-en-bas-yoga.jpg",
        description: "descr",
        groupe_musc_1_ID: 1,
        groupe_musc_2_ID: 2,
        objectif_ID: 3,
        energetique: "energetik",
      },
    ];
    const fetchData = async () => {
      /*setLoading(true);
      try {
        const { data: response } = await axios.get("yoga_api/figures/get_all");

        
      } catch (error) {
        toast.error("Erreur lors de la lecture");
      }
      setLoading(false);*/

      setData(test);
    };

    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Container>
          <h2>Liste des figures</h2>
          {data.map((item) => (
            <Row className={"mb-2"}>
              <Card>
                <Row>
                  <Col className={"img-vert"}>
                    <Card.Img src={item.image} />
                  </Col>
                  <Col sm={10}>
                    <Card.Body>
                      <Card.Title>{item.nom_fr}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="primary">Modifier</Button>&nbsp;&nbsp;
                      <Button variant="primary">Supprimer</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </Container>
      )}
    </>
  );
};

export default List;
