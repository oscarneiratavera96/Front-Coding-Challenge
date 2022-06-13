import { Card, Button, Badge, ButtonGroup } from "react-bootstrap";

const Cards = (Questions) => {
  //Variable of State of the Component Questions
  const { title, questi, handleChange, count } = Questions;

  //Total questions variable
  const total = 11;

  //Question card
  return (
    <div className="align-items-center h-50 d-flex">
      <Card
        border="warning"
        className="container  col-md-6 animate__animated animate__tada bg-dark "
      >
        <Card.Body className="text-light  ">
          <Badge className="text-left" bg="secondary">{`${
            count + 1
          }/${total}`}</Badge>
          <Card.Title className=" text-center">{`${title}`}</Card.Title>
          <Card.Text className=" text-center">{`${questi}`}</Card.Text>
        </Card.Body>
        <ButtonGroup
          onClick={handleChange}
          className=" btn text-center justify-content-center "
        >
          <Button className="hover" value="True" variant="success">
            True
          </Button>{" "}
          <Button value="False" variant="danger">
            False
          </Button>{" "}
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default Cards;
