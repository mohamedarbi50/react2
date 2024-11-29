import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "../name/Name";
import Description from "../description/Description";
import Url from "../url/Url";
import Price from "../price/Price";
import { CardFooter, CardHeader } from "react-bootstrap";
import Image from "../image/Image";

function Cardd() {
  let name = "Queen";
  return (
    <div >
      <Card className="container" bg="dark" text="white" style={{ width: "20rem" }}>
      <CardHeader
        style={{
          fontWeight: 500,
          fontSize: "1.3rem",
        }}
      >
        GET IT NOW !!
      </CardHeader>
      
      <Url />
      <Card.Body>
        <Card.Text>
          <Price />
        </Card.Text>
        <Card.Title>
          <Name />
        </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
              <CardFooter> Hello {name ? name : "There"} </CardFooter>
           
          </Card>
          {name && <Image />}  
  </div>);
}

export default Cardd;
