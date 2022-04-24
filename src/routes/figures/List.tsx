import axios from "axios";
import React, { useEffect, useState } from "react";
import { Figure } from "../../types/Figure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, Spinner } from "react-bootstrap";

const List = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Figure[]>([]);

  useEffect(() => {
    console.log("appel");
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          process.env.REACT_API_URL + "/stuff/to/fetch"
        );
        setLoading(response);
      } catch (error) {
        toast.error("Erreur lors de la lecture");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div>
          <h2>Liste des figures</h2>
          {data.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Modifier</Button>
                <Button variant="primary">Supprimer</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
