import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Searchbar from "./Searchbar";
import scifi from "../scifi.json";

function BookList() {
  const [filteredBooks, setFilteredBooks] = useState(scifi); 

 
  const handleSciFiFiltered = (filtered) => {
    setFilteredBooks(filtered);
  };

  return (
    <Container>
      
      <Searchbar scifi={scifi} onSciFiFiltered={handleSciFiFiltered} />
      
      <Row>
       
        {filteredBooks.map((book, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
