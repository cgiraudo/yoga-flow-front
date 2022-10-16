import { Form, Image } from "react-bootstrap";
import "./RecettesListe.scss";

const RecettesListe = () => {
  return (
    <>
      <Form>
        <div>
          <Image
            height="100"
            fluid
            src={`${process.env.PUBLIC_URL}/images/quiche.jpg`}
          />
          <div className="image-text">Quiche</div>
        </div>
      </Form>
    </>
  );
};

export default RecettesListe;
