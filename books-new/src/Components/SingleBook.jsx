import React from "react";
import { Card, Button} from "react-bootstrap";
import App from "../App";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import scifi from "../scifi.json"

function SingleBook({book}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           {book.price}
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    );
  }

  export default SingleBook