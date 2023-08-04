import "./App.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
const shirts = [
  {
    ImagePath: "images/Aero Jeans.png",
    Brand: "Aero Jeans",
    Model: "Graphic Printed Cotton Shirt with Patch Pocket",
    Price: "Rs.1,399",
  },
  {
    ImagePath: "images/Altair.png",
    Brand: "Altair",
    Model: "Plain Slim Fit Shirt",
    Price: "Rs.2,399",
  },
  {
    ImagePath: "images/AlTheory.png",
    Brand: "AlTheory",
    Model: "Striped Shirt with Resort Collar",
    Price: "Rs.1,499",
  },
  {
    ImagePath: "images/Bear House.png",
    Brand: "Bear House",
    Model: "Checked Slim Fit Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Break Point.png",
    Brand: "Break Point",
    Model: "Micro Print Slim Fit Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/British Club.png",
    Brand: "British Club",
    Model: "Checked Slim Fit Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Campus Sutra.png",
    Brand: "Campus Sutra",
    Model: "Checked Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/DennisLingo.png",
    Brand: "DennisLingo",
    Model: "Full Sleeves Slim Fit Classic Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Dillinger.png",
    Brand: "Dillinger",
    Model: "Cotton Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/DNMX.png",
    Brand: "DNMX",
    Model: "Checked Slim Fit Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Gant.png",
    Brand: "Gant",
    Model: "Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Indian Garage.png",
    Brand: "Indian Garage",
    Model: "Slim Fit Shirt with Button Down Collar",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/iVOC.png",
    Brand: "iVOC",
    Model: "Slim Fit Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Jack & Jones.png",
    Brand: "Jack & Jones",
    Model: "Embellished Boxy Fit Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Ketch.png",
    Brand: "Ketch",
    Model: "Slim Fit Checked Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Lakaala.png",
    Brand: "Lakaala",
    Model: "Mandarin Collar Shirts with Full Sleeves",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Lee Cooper.png",
    Brand: "Lee Cooper",
    Model: "Cotton Shirt with Flap Pockets",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Lewel.png",
    Brand: "Lewel",
    Model: "Checked Slim Fit Hooded Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Louis Monarch.png",
    Brand: "Louis Monarch",
    Model: "Striped Regular Fit Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Netplay.png",
    Brand: "Netplay",
    Model: "Striped Slim Fit Shirt with Patch Pocket",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Rare Rabbit.png",
    Brand: "Rare Rabbit",
    Model: "Textured Slim Fit Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Tistabene.png",
    Brand: "Tistabene",
    Model: "Chevron Print Shirt with Spread Collar",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Urban Buccachi.png",
    Brand: "Urban Buccachi",
    Model: "Full-Sleeves Spread-Collar Shirt",
    Price: "Rs.2,699",
  },
  {
    ImagePath: "images/Wrangler.png",
    Brand: "Wrangler",
    Model: "Checked Slim Fit Shirt",
    Price: "Rs.2,699",
  },
];
function App() {
  return (
    <div>
      <Container>
        <Row>
          {shirts.map((ajio, index) => {
            return (
              <Col key={index} className="col-4">
                <Card className="my-2 mx-2">
                  <img
                    height={400}
                    width={400}
                    src={ajio.ImagePath}
                    alt={ajio.ImagePath}
                  />
                  <CardBody className="text-en center-text">
                    <CardTitle style={{ color: "green" }} tag="h6">
                      {ajio.Brand}
                    </CardTitle>
                    <CardTitle style={{ fontFamily: "unset" }} tag="h5">
                      {ajio.Model}
                    </CardTitle>
                    <CardText>{ajio.Price}</CardText>
                    <Button color="success">BUY</Button>
                    <Button color="primary">Add to Cart</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
