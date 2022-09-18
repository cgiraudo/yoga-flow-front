import axios from "axios";
import React, { useEffect, useState } from "react";
import { Ingredient } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Spinner, Form, Col } from "react-bootstrap";
import ingredients from "../../services/data";

const Ingredients = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Ingredient[]>(ingredients);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("yoga_api/figures/get_all");
        setData(response.figures);
      } catch (error) {
        toast.error("Erreur lors de la lecture");
      }
      setLoading(false);
    };

    //fetchData();
  }, []);

  return (
    <>
      {" "}
      <h2>Liste des ingrédients</h2>
      <ToastContainer />
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Form>
          {data.map((item) => (
            <Row>
              <Col>
                <Form.Check checked type={"checkbox"} label={item.nom} />
              </Col>
            </Row>
          ))}
        </Form>
      )}
    </>
  );
};

export default Ingredients;
