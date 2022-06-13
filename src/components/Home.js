import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    //Initial Card
    <div className="align-items-center nivel   d-flex nivel">
      <Card
        border="warning"
        className="container  col-md-4 animate__animated animate__tada bg-dark "
      >
        <Card.Body className="text-light  ">
          <Card.Title className=" text-center">
            Welcome to the Trivia Challenge
          </Card.Title>
          <Card.Text className=" text-center">
            You will be presented with 11 True or False questions.
          </Card.Text>
          <Card.Text className=" text-center">Can you score 100%?</Card.Text>
        </Card.Body>
        <Link className="btn btn-outline-warning bLink" to="/Questions">
          BEGIN
        </Link>
      </Card>
    </div>
  );
};

export default Home;
