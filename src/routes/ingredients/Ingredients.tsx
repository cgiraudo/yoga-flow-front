import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Form, Col } from "react-bootstrap";
import ingredients from "../../data/ingredients";

const Ingredients = () => {
  /*useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const models = await DataStore.query(IngredientModel);
      console.log("models", models);

      setLoading(false);
    };

    fetchData();
  }, []);*/

  return (
    <>
      <h2>Liste des ingrédients</h2>
      <ToastContainer />

      <Form>
        {ingredients.map((item) => (
          <Row>
            <Col>
              <Form.Check checked type={"checkbox"} label={item.nom} />
            </Col>
          </Row>
        ))}
      </Form>
    </>
  );
};

export default Ingredients;
